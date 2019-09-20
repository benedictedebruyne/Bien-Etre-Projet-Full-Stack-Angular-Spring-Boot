package be.businesstraining.bienetreback.repository;

import be.businesstraining.bienetreback.domain.AppointmentType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAppointmentTypeRepository extends JpaRepository<AppointmentType, String> {

}
