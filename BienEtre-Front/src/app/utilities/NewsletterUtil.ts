import { Newsletter } from './../domain/newsletter';
import { EmailValidator } from '@angular/forms';

export class NewsletterUtil {
public static toBackend( news: Newsletter): any {
  return {
          username: news.username,
          email: news.email,
          enabled: news.enabled
        };
}
}
