export interface Appointment {

  id?: number;
  type: string;
  title: string;
  start?: string;
  end?: string;
  backgroundColor: string;
  textColor?: string;
  allDay?: boolean;
  username?: string;
  comment?: string;
}
