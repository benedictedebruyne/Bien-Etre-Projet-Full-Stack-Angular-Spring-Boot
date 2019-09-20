package be.businesstraining.bienetreback.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "Appointment_Types")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class AppointmentType {

    // RDV ou plage horaire
    @Id
    private String id;

    // Intitulé
    private String name;

    // Durée
    private int duration;

    // Séance individuelle ou cours collectif
    private Boolean individual;

    // Background color
    @Column(name = "Background_Color")
    private String backgroundColor;

    // Text color
    @Column(name = "Text_Color")
    private String textColor;

    @JsonIgnore
    @OneToMany(mappedBy = "type")
    private Set<Appointment> appointment;
}
