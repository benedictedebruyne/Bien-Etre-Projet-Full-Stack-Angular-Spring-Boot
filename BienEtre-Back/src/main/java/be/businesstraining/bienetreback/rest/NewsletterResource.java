package be.businesstraining.bienetreback.rest;

import be.businesstraining.bienetreback.domain.Newsletter;
import be.businesstraining.bienetreback.repository.INewsletterRepository;
import be.businesstraining.bienetreback.utils.MyUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/newsletters")
@CrossOrigin(origins = "*")
public class NewsletterResource {
    private static final Logger LOGGER = LoggerFactory.getLogger(AppointmentsResource.class);

    private INewsletterRepository repository;

    public NewsletterResource(INewsletterRepository repository) {
        this.repository = repository;
    }

    @PostMapping()
    public ResponseEntity<?> subscribeNewsletter(@RequestBody Newsletter newsletter) {
        try {
            repository.save(newsletter);
            return new ResponseEntity<Map<String, Object>>(MyUtils.buildJsonResponse("Success de l'envoi d'inscription à la newsletter"), HttpStatus.OK);
        } catch (Exception ex) {
            LOGGER.error("Exception lors de la prise de RDV: " + ex);
            return new ResponseEntity<String>("Erreur lors de l'envoi d'inscription à la newsletter: " + ex.getMessage(), HttpStatus.CONFLICT);
        }
    }

}