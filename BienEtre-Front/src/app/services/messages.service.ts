import { HttpClient } from '@angular/common/http';
import { MessageUtil } from './../utilities/MessageUtil';
import { Message } from './../domain/message';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private client: HttpClient) { }

  // constructor(private client: HttpClient, private authService: AuthenticationService) { }

  URL = 'http://localhost:8080/messages';

   createMessage(username: string, email: string, object: string, message: string): Message {

    var msg: any = {};

    msg.username = username;
    msg.email = email;
    msg.object = object;
    msg.message = message;

      return msg;
  }

  addMessage(msg: Message): Observable<any> {
    console.table(MessageUtil.toBackend(msg));
    return this.client.post(this.URL, MessageUtil.toBackend(msg));
  }
}
