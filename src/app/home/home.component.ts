import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { DataMovies, Movies } from '../shared/entities';
import { Subscription } from 'rxjs';
import { MoviesService } from '../shared/services/movies.service';
import { MovieListComponent } from "./movie-list/movie-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeroComponent, MovieListComponent]
})
export class HomeComponent implements OnInit, OnDestroy {
  movies!: DataMovies;
  dataMovies!: Subscription;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll() {
    this.dataMovies = this.moviesService
      .getPopularMovies()
      .subscribe((data: DataMovies) => {
        this.movies = data;
      });
  }

  ngOnDestroy(): void {
    this.dataMovies.unsubscribe();
  }
}
