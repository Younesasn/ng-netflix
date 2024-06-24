import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { Movies } from '../shared/entities';
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
  movies: Movies[] = [];
  dataMovies!: Subscription;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.fetchAll();

  }

  fetchAll() {
    this.dataMovies = this.moviesService
      .getPopularMovies()
      .subscribe((data: Movies[]) => {
       this.movies = data;
        console.log(this.movies);
      });
  }

  ngOnDestroy(): void {
    this.dataMovies.unsubscribe();
  }
}
