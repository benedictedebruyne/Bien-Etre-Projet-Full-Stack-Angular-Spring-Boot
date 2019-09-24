import { Appointment } from './../domain/appointment';

export class AppointmentUtil {
        public static fromBackend(input: any): Appointment {
                return {
                        id: input.id,
                        type: input.type.id,
                        title: input.type.name,
                        start: input.start,
                        end: input.end,
                        backgroundColor: input.type.backgroundColor,
                        textColor: input.type.textColor,
                        allDay: input.allDay,
                        comment: input.comment
                };
        }
        public static fromBackendForUser(input: any): Appointment {
                return {
                        id: input.id,
                        type: input.type.id,
                        title: input.type.name + ' ' + input.comment,
                        start: input.start,
                        end: input.end,
                        backgroundColor: input.type.backgroundColor,
                        textColor: input.type.textColor,
                        allDay: input.allDay,
                        comment: input.comment
                };
        }
        public static toBackend(appointment: Appointment): any {
                return {
                        type: { id: appointment.type },
                        start: appointment.start.substring(0, 16),
                        user: { username: appointment.username },
                        comment: appointment.comment,
                        allDay: appointment.allDay
                };
        }
}
