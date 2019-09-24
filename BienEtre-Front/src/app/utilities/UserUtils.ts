import { User } from '../domain/user';

export class UserUtil {
    public static fromBackend(input: any): User {
        return {
            id: input.id,
            username: input.username,
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            password: input.password,
            lastPasswordResetDate: input.lastPasswordResetDate,
            enabled: input.enabled
        };
    }
}
