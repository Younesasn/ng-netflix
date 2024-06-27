import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { DataMovies, Movies } from '../shared/entities';
import { Subscription } from 'rxjs';
import { MoviesService } from '../shared/services/movies.service';
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HeroComponent, MovieListComponent],
})
export class HomeComponent implements OnInit, OnDestroy {
  id: number = 0;
  intervalId: any;
  movies!: DataMovies;
  fade: boolean = true;
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
        this.randomMovie();
        this.startAutoRandomMovie();
      });
  }

  randomMovie() {
    if (this.movies && this.movies.results && this.movies.results.length > 0) {
      this.fade = false;
      setTimeout(() => {
        this.id = Math.floor(Math.random() * this.movies.results.length);
        this.fade = true;
      }, 500);
    }
  }

  startAutoRandomMovie() {
    this.intervalId = setInterval(() => {
      this.randomMovie();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.dataMovies) {
      this.dataMovies.unsubscribe();
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
