import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.OPEN_AI_KEY}`
    });

    const body = {
      prompt: message,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.7
    };

    return this.http.post(environment.OPEN_AI_URL, body, { headers });
  }
}
