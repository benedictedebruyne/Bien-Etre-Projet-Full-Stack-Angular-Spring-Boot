package be.businesstraining.bienetreback.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;



@Entity
@Table(name = "Newsletters")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Newsletter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private Boolean enabled;

    public Newsletter(String username, String email, Boolean enabled) {
        this.username = username;
        this.email = email;
        this.enabled = enabled;
    }
}
