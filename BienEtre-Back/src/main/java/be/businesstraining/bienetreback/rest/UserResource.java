package be.businesstraining.bienetreback.rest;

import be.businesstraining.bienetreback.domain.Appointment;
import be.businesstraining.bienetreback.domain.User;
import be.businesstraining.bienetreback.repository.IAppointmentTypeRepository;
import be.businesstraining.bienetreback.repository.IAppointmentsRepository;
import be.businesstraining.bienetreback.repository.IUserRepository;
import be.businesstraining.bienetreback.services.IAppointmentsService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserResource {

    private IUserRepository repository;

    public UserResource(IUserRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{username}")
    public User userDetails(@PathVariable String username) {
        return repository.findByUsername(username);
    }

}
