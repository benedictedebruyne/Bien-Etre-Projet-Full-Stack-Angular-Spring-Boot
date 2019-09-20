package be.businesstraining.bienetreback.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Messages")
@NoArgsConstructor
//@AllArgsConstructor
@Setter
@Getter
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String object;
    private String message;

    public Message(String username, String email,String object, String message) {
        this.username = username;
        this.email = email;
        this.object = object;
        this.message = message;
    }
}
