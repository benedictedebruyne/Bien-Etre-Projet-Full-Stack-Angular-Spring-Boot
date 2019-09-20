package be.businesstraining.bienetreback.rest;

import be.businesstraining.bienetreback.domain.Message;
import be.businesstraining.bienetreback.repository.IMessageRepository;
import be.businesstraining.bienetreback.utils.MyUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/messages")
@CrossOrigin(origins = "*")
public class MessagesResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(AppointmentsResource.class);

    private IMessageRepository repository;

    public MessagesResource(IMessageRepository repository) {
        this.repository = repository;
    }

    @PostMapping()
    public ResponseEntity<?> addMessage(@RequestBody Message message) {
        try {
            repository.save(message);
            return new ResponseEntity<Map<String, Object>>(MyUtils.buildJsonResponse("Success de l'envoi de message"), HttpStatus.OK);
        } catch (Exception ex) {
            LOGGER.error("Exception lors de la prise de RDV: " + ex);
            return new ResponseEntity<String>("Erreur lors de l'envoi de message: " + ex.getMessage(), HttpStatus.CONFLICT);
        }
    }
}
