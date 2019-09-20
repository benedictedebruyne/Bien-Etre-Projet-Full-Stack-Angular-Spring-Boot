package be.businesstraining.bienetreback.services;

import be.businesstraining.bienetreback.domain.Appointment;

import java.time.LocalDateTime;
import java.util.Set;

public interface IAppointmentsService {

    Set<Appointment> allAppointments();
    Appointment getAppointmentById(Long id);
    Appointment createAppointment(String type, LocalDateTime start, LocalDateTime end, Long userId, Boolean allDay, String comment);

}
