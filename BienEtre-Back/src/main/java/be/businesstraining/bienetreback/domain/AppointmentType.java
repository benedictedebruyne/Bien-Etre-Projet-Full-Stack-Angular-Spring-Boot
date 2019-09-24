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

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public Boolean getIndividual() {
        return individual;
    }

    public void setIndividual(Boolean individual) {
        this.individual = individual;
    }

    public String getBackgroundColor() {
        return backgroundColor;
    }

    public void setBackgroundColor(String backgroundColor) {
        this.backgroundColor = backgroundColor;
    }

    public String getTextColor() {
        return textColor;
    }

    public void setTextColor(String textColor) {
        this.textColor = textColor;
    }

    public Set<Appointment> getAppointment() {
        return appointment;
    }

    public void setAppointment(Set<Appointment> appointment) {
        this.appointment = appointment;
    }
}
