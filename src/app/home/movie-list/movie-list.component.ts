import { Component, Input, OnInit } from '@angular/core';
import { MovieCardComponent } from '../../movie-card/movie-card.component';
import { DataMovies } from '../../shared/entities';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
  imports: [MovieCardComponent, CommonModule],
})
export class MovieListComponent implements OnInit {
  @Input() movies!: DataMovies;

  constructor() {}

  ngOnInit(): void {
    console.log(this.movies);
  }
}
