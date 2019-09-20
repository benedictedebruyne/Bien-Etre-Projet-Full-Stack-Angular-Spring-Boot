package be.businesstraining.bienetreback.security;

import be.businesstraining.bienetreback.domain.User;
import be.businesstraining.bienetreback.model.security.Authority;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;
import java.util.stream.Collectors;

public final class JwtUserFactory {

    private JwtUserFactory() {
    }

    public static JwtUser create(User person) {
        return new JwtUser(
                person.getId(),
                person.getUsername(),
                person.getFirstName(),
                person.getLastName(),
                person.getEmail(),
                person.getPassword(),
                mapToGrantedAuthorities(person.getAuthorities()),
                person.getEnabled(),
                person.getLastPasswordResetDate()
        );
    }

    private static List<GrantedAuthority> mapToGrantedAuthorities(List<Authority> authorities) {
        return authorities.stream()
                .map(authority -> new SimpleGrantedAuthority(authority.getName().name()))
                .collect(Collectors.toList());
    }
}
