import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../shared/entities';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  @Input() movie!: Movies;
  @Input() fade!: boolean;

  constructor() {}

  ngOnInit(): void {
    console.log(this.movie);
  }
}
