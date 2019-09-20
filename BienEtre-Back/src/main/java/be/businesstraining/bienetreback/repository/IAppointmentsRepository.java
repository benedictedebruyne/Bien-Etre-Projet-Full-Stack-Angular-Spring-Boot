package be.businesstraining.bienetreback.repository;

import be.businesstraining.bienetreback.domain.Appointment;
import be.businesstraining.bienetreback.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;


public interface IAppointmentsRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findAppointmentsByStartAndEnd(LocalDateTime start, LocalDateTime end);
    List<Appointment> findAppointmentsByStart(LocalDateTime start);
    List<Appointment> findAppointmentsByStartAfterAndEndBefore(LocalDateTime start, LocalDateTime end);
    List<Appointment> findTop10AppointmentsByUserAndStartAfterOrderByStart(User user, LocalDateTime date);
}
