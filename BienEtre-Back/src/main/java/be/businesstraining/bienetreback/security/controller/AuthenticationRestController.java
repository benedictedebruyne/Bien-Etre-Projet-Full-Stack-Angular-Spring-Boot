package be.businesstraining.bienetreback.security.controller;

import be.businesstraining.bienetreback.model.security.Authority;
import be.businesstraining.bienetreback.domain.User;
import be.businesstraining.bienetreback.repository.IUserRepository;
import be.businesstraining.bienetreback.rest.AppointmentsResource;
import be.businesstraining.bienetreback.security.JwtAuthenticationRequest;
import be.businesstraining.bienetreback.security.JwtTokenUtil;
import be.businesstraining.bienetreback.security.JwtUser;
import be.businesstraining.bienetreback.security.repository.AuthorityRepository;
import be.businesstraining.bienetreback.security.service.JwtAuthenticationResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin(origins = "*")
public class AuthenticationRestController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AppointmentsResource.class);

    @Value("${jwt.header}")
    private String tokenHeader;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private IUserRepository IUserRepository;

    @Autowired
    private AuthorityRepository authorityRepository;

    @Autowired
    @Qualifier("jwtUserDetailsService")
    private UserDetailsService userDetailsService;

    @RequestMapping(value = "${jwt.route.authentication.path}", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest) throws AuthenticationException {

        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        // Reload password post-security so we can generate the token
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails);

        // Return the token
        return ResponseEntity.ok(new JwtAuthenticationResponse(token));
    }

    @RequestMapping(value = "${jwt.route.authentication.refresh}", method = RequestMethod.GET)
    public ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request) {
        String authToken = request.getHeader(tokenHeader);
        final String token = authToken.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        JwtUser user = (JwtUser) userDetailsService.loadUserByUsername(username);

        if (jwtTokenUtil.canTokenBeRefreshed(token, user.getLastPasswordResetDate())) {
            String refreshedToken = jwtTokenUtil.refreshToken(token);
            return ResponseEntity.ok(new JwtAuthenticationResponse(refreshedToken));
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @RequestMapping(value = "${jwt.route.authentication.register}", method = RequestMethod.POST)
    @Transactional
    public ResponseEntity<?> registerNewUser(@RequestBody User userRequest) {


        try {
            JwtAuthenticationRequest authenticationRequest = new JwtAuthenticationRequest();
            authenticationRequest.setUsername(userRequest.getUsername());
            authenticationRequest.setPassword(userRequest.getPassword());
            // Créer un User à partir de JwtUser
            User newUser = new User();
            newUser.setUsername(userRequest.getUsername());
            newUser.setPassword( new BCryptPasswordEncoder().encode(userRequest.getPassword()));
            newUser.setFirstName(userRequest.getFirstName());
            newUser.setLastName(userRequest.getLastName());
            newUser.setEmail(userRequest.getEmail());
            newUser.setEnabled(true);
            newUser.setLastPasswordResetDate(new Date());

            // Assigner au user un role initial (USER par exemple)
            List<Authority> authorities = new ArrayList<>();

            /// Begin
            Authority roleUser = authorityRepository.findAll().stream().filter(a -> a.getName().toString().equals("ROLE_USER")).findFirst().orElse(null);
            authorities.add(roleUser);

            /// End


            //  authorities.add(authorityRepository.findById(1L).orElse(null));
            newUser.setAuthorities(authorities);

            // save() du user dans la BDD (via le repo)
            IUserRepository.save(newUser);

            LOGGER.info("============= AJOUT REUSSI =============");

            // Create the token
            return createAuthenticationToken(authenticationRequest);

        } catch (Exception ex) {
            LOGGER.error("============= ECHEC DE L  AJOUT : "+ex);
        }



        return  null;
    }


    @ExceptionHandler({AuthenticationException.class})
    public ResponseEntity<String> handleAuthenticationException(AuthenticationException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }

    /**
     * Authenticates the user. If something is wrong, an {@link AuthenticationException} will be thrown
     */
    private void authenticate(String username, String password) {
        Objects.requireNonNull(username);
        Objects.requireNonNull(password);

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new AuthenticationException("User is disabled!", e);
        } catch (BadCredentialsException e) {
            throw new AuthenticationException("Bad credentials!", e);
        }
    }
}
