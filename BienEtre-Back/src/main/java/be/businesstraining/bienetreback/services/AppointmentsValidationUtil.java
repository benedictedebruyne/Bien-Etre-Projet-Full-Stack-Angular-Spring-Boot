package be.businesstraining.bienetreback.services;

import be.businesstraining.bienetreback.domain.Appointment;

import java.time.LocalDateTime;
import java.util.List;

public class AppointmentsValidationUtil {

    private static boolean sameKindOfTimeslot(Appointment a, String typeId) {
        // Plage du même type définie
        return a.getType().getId().equals(typeId.substring(0, 1));
    }

    private static boolean beginInTimeslot(Appointment a, LocalDateTime start) {
        // Début du RDV après ou égal au début de la plage du même type
        return (a.getStart().isBefore(start) || a.getStart().isEqual(start));
    }

    private static boolean endInTimeslot(Appointment a, LocalDateTime end) {
        // Fin du RDV avant ou égale à la fin de la plage du même type
        return a.getEnd().isAfter(end) || a.getEnd().isEqual(end);
    }

    private static boolean sameKindOfAppointment(Appointment a, String typeId) {
        // Autre rendez-vous du même type présent
        return a.getType().getId().equals(typeId);
    }

    private static boolean beginInOtherAppointment(Appointment a, LocalDateTime start, LocalDateTime end) {
//        // Début du RDV après ou égal au début du RDV du même type
//        return (a.getStart().isAfter(start) || a.getStart().isEqual(start)) &&
//                // Fin du rendez-vous avant le début du RDV du même type
//                (a.getStart().isBefore(end));
        // Début du RDV après ou égal au début du RDV du même type
        return (start.isAfter(a.getStart()) || start.isEqual(a.getStart())) &&
                // Fin du rendez-vous avant le début du RDV du même type
                (start).isBefore(a.getEnd());
    }

    private static boolean endInOtherAppointment(Appointment a, LocalDateTime start, LocalDateTime end) {
//        // Fin du RDV avant ou égale à la fin du RDV du même type
//        return (a.getEnd().isBefore(end) || a.getEnd().isEqual(end)) &&
//                // Début du rendez-vous après la fin du RDV du même type
//                (a.getEnd().isAfter(start));
        // Fin du RDV avant ou égale à la fin du RDV du même type
        return (end.isBefore(a.getEnd()) || end.isEqual(a.getEnd())) &&
                // Début du rendez-vous après la fin du RDV du même type
                (end.isAfter(a.getStart()));
    }

    public static String availableTimeslot(List<Appointment> agenda, LocalDateTime start, LocalDateTime end, String typeId, Boolean individual, Long userId) {
        String ret = "Ce type de rendez-vous ne peut pas être pris à ce moment-là";
        for (Appointment a : agenda) {
            if (sameKindOfTimeslot(a, typeId) && beginInTimeslot(a, start) && endInTimeslot(a, end)) {
                for (Appointment b : agenda) {
                    if ((sameKindOfAppointment(b, typeId)) && (beginInOtherAppointment(b, start, end) || endInOtherAppointment(b, start, end))) {
                        if (individual || userId == b.getUser().getId()) {
                            return "Cette période n'est pas disponible";
                        } else {
                            ret = "OK";
                        }
                    }
                }
                return "OK";
            } else {
                ret = "Ce type de rendez-vous ne peut pas être pris à ce moment-là";
            }
        }
        return ret;
    }

}