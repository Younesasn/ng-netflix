import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  display: boolean = false;

  constructor() {}

  toogleModal() {
    this.display = !this.display;
  }
}
