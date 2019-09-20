package be.businesstraining.bienetreback.services;

import be.businesstraining.bienetreback.domain.Appointment;
import be.businesstraining.bienetreback.domain.AppointmentType;
import be.businesstraining.bienetreback.domain.User;
import be.businesstraining.bienetreback.repository.IAppointmentTypeRepository;
import be.businesstraining.bienetreback.repository.IAppointmentsRepository;
import be.businesstraining.bienetreback.repository.IUserRepository;
import be.businesstraining.bienetreback.rest.AppointmentsResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Service
public class AppointmentsServiceImpl implements IAppointmentsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(AppointmentsResource.class);


    @Autowired
    private IAppointmentsRepository appointmentsRepository;

    @Autowired
    private IUserRepository IUserRepository;

    @Autowired
    private IAppointmentTypeRepository IAppointmentTypeRepository;

    @Override
    public Set<Appointment> allAppointments() {
        return new HashSet<>(appointmentsRepository.findAll());
    }

    @Override
    public Appointment getAppointmentById(Long id) {
        return appointmentsRepository.findById(id).orElse(null);
    }

    @Override
    public Appointment createAppointment(String typeId, LocalDateTime start, LocalDateTime end, Long userId, Boolean allDay, String comment) {
        try {
            LOGGER.info("Avant Récupérer le client: typeId = " + typeId + ", start = " + start + ", end = " + end + ", userId = " + userId + ", allDay = " + allDay);
            // Récupérer le Cient
            User user = IUserRepository.findById(userId).orElse(null);

            LOGGER.info("Avant Récupérer le type: typeId = " + typeId + ", start = " + start + ", end = " + end + ", userId = " + userId + ", allDay = " + allDay);
            // Récupérer le type
            AppointmentType type = IAppointmentTypeRepository.findById(typeId).orElse(null);

            LOGGER.info("Avant Créer le rendez-vous: typeId = " + typeId + ", start = " + start + ", end = " + end + ", userId = " + userId + ", allDay = " + allDay);
            // Créer le rendez-vous
            Appointment rdv = new Appointment(type, start, end, comment, user);

            LOGGER.info("Avant Sauver le rendez-vous: typeId = " + typeId + ", start = " + start + ", end = " + end + ", userId = " + userId + ", allDay = " + allDay);
            // Sauver le rendez-vous
            Appointment newAppointment = appointmentsRepository.save(rdv);
            return newAppointment;

        } catch (Exception ex) {
            // lever
            LOGGER.error("Exception lors de la création de rdv: " + ex.getMessage());
            return null;
        }
    }

}
