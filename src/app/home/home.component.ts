import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { DataMovies, Movies } from '../shared/entities';
import { Subscription } from 'rxjs';
import { MoviesService } from '../shared/services/movies.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HeroComponent],
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
        console.log(this.movies);
      });
  }

  ngOnDestroy(): void {
    this.dataMovies.unsubscribe();
  }
}
