import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../shared/entities';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  @Input() movie!: Movies;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.movie);
  }
}
