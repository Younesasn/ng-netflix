import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { DataMovies, Movies } from '../entities';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl = `${environment.apiUrl}/movie/popular?api_key=${environment.apiKey}`;

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<DataMovies>(this.baseUrl);
  }
}
