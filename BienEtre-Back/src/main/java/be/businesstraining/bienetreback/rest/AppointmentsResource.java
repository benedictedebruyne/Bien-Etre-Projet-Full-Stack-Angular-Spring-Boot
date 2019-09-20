package be.businesstraining.bienetreback.rest;

import be.businesstraining.bienetreback.domain.Appointment;
import be.businesstraining.bienetreback.domain.AppointmentType;
import be.businesstraining.bienetreback.domain.User;
import be.businesstraining.bienetreback.repository.IAppointmentTypeRepository;
import be.businesstraining.bienetreback.repository.IAppointmentsRepository;
import be.businesstraining.bienetreback.repository.IUserRepository;
import be.businesstraining.bienetreback.services.IAppointmentsService;
import be.businesstraining.bienetreback.services.AppointmentsValidationUtil;
import be.businesstraining.bienetreback.utils.MyUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/appointments")
@CrossOrigin(origins = "*")
public class AppointmentsResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(AppointmentsResource.class);

    private IAppointmentsRepository repository;
    private IAppointmentTypeRepository IAppointmentTypeRepository;
    private IAppointmentsService service;
    private IUserRepository IUserRepository;
    private Set<Appointment> app;

    public AppointmentsResource(IAppointmentsRepository appointmentsRepository,
                                IAppointmentsService IAppointmentsService,
                                IAppointmentTypeRepository IAppointmentTypeRepository,
                                IUserRepository IUserRepository) {
        this.repository = appointmentsRepository;
        this.service = IAppointmentsService;
        this.IAppointmentTypeRepository = IAppointmentTypeRepository;
        this.IUserRepository = IUserRepository;
    }

    @GetMapping
    public List<Appointment> allAppointments() {

        return repository.findAll();
    }

    @GetMapping("/period/{start}/{end}")
    @PreAuthorize("hasRole('ADMIN')")
    public List<Appointment> appointmentsForAPeriod(@PathVariable LocalDateTime start, @PathVariable LocalDateTime end) {

        return repository.findAppointmentsByStartAndEnd(start, end);
    }

    @GetMapping("/date/{day}")
    @PreAuthorize("hasRole('ADMIN')")
    public List<Appointment> appointmentsForADate(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime day) {

        return repository.findAppointmentsByStart(day);
    }

    @GetMapping("/day/{start}/{end}")
    @PreAuthorize("hasRole('ADMIN')")
    public List<Appointment> appointmentsForADay(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
                                                 @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end) {

        return repository.findAppointmentsByStartAfterAndEndBefore(start, end);
    }

    @GetMapping("/{username}")
    public List<Appointment> appointmentsForAUser(@PathVariable String username) {

        // Récupérer le Cient
        User user = IUserRepository.findByUsername(username);
        LocalDateTime today = LocalDateTime.now();
        return repository.findTop10AppointmentsByUserAndStartAfterOrderByStart(user, today);
    }

    @PostMapping("/{username}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public ResponseEntity<?> addAppointment(@PathVariable String username, @RequestBody Appointment c) {
        try {
            // Récupérer l'objet type et déterminer le end
            c.setUser(IUserRepository.findByUsername(username));
            AppointmentType type = IAppointmentTypeRepository.findById(c.getType().getId()).orElse(null);
            LocalDateTime start = c.getStart();
            LocalDateTime end = c.getStart().plusMinutes(type.getDuration());

            // Sélectionner une journée pour la validation du rendez-vous
            String stringStartDay = c.getStart().toString().substring(0, 10) + "T00:00:00";
            LocalDateTime startDay = LocalDateTime.parse(stringStartDay);
            String stringEndDay = end.toString().substring(0, 10) + "T23:59:59";
            LocalDateTime endDay = LocalDateTime.parse(stringEndDay);

            String msg = AppointmentsValidationUtil.availableTimeslot(appointmentsForADay(startDay, endDay), start, end, type.getId(), type.getIndividual(), c.getUser().getId());
            if (msg == "OK") {
                service.createAppointment(type.getId(), start, end, c.getUser().getId(), c.getAllDay(), c.getComment());
                return new ResponseEntity<Map<String, Object>>(MyUtils.buildJsonResponse(msg), HttpStatus.OK);
            } else {
                return new ResponseEntity<Map<String, Object>>(MyUtils.buildJsonResponse(msg), HttpStatus.CONFLICT);
            }
        } catch (Exception ex) {
            LOGGER.error("Exception lors de la prise de RDV: " + ex);
            return new ResponseEntity<Map<String, Object>>(MyUtils.buildJsonResponse("Exception lors de la prise de RDV: " + ex), HttpStatus.CONFLICT);
        }
    }
}
