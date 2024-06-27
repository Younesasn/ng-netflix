import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ChatbotComponent } from "./chatbot/chatbot.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, ChatbotComponent]
})
export class AppComponent {
  title = 'ng-netflix';

  constructor() {}
}
