export interface User {

  id: number;
  lastName: string;
  firstName: string;
  username: string;
  email: string;
  password: string;
  enabled: boolean;
  lastPasswordResetDate: Date;
}
