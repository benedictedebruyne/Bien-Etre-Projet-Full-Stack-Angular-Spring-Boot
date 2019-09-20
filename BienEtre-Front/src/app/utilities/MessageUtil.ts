import { Message } from './../domain/message';
import { EmailValidator } from '@angular/forms';

export class MessageUtil {
public static toBackend( msg: Message): any {
  return {
          username: msg.username,
          email: msg.email,
          object: msg.object,
          message: msg.message
        };
}
}
