package be.businesstraining.bienetreback.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Appointments")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime start;
    private LocalDateTime end;
    private Boolean allDay;
    private String comment;

    @ManyToOne
    private User user;

    @ManyToOne
    private AppointmentType type;

    public Appointment(AppointmentType type, LocalDateTime start, LocalDateTime end,String comment, User user) {
        this.start = start;
        this.end = end;
        this.user = user;
        this.type = type;
        this.comment = comment;
    }
}
