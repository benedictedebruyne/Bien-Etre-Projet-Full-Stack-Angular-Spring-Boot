import { NewsletterUtil } from './../utilities/NewsletterUtil';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Newsletter } from '../domain/newsletter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewslettersService {

  constructor(private client: HttpClient) { }

  URL = 'http://localhost:8080/newsletters';

   createNewsletter(username: string, email: string): Newsletter {

    var news: any = {};

    news.username = username;
    news.email = email;
    news.enabled = true;

      return news;
  }

  addNewsletter(news: Newsletter): Observable<any> {
    console.table(NewsletterUtil.toBackend(news));
    return this.client.post(this.URL, NewsletterUtil.toBackend(news));
  }
}
