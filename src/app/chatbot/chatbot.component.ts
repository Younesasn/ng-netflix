import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { ChatService } from '../shared/services/chat.service';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [LucideAngularModule, CommonModule, ReactiveFormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css',
})
export class ChatbotComponent implements OnInit {
  display: boolean = false;
  response: string = '';
  public form:FormGroup = new FormGroup({
    query: new FormControl('')
  });

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    console.log(environment.OPEN_AI_KEY);
  }

  toogleModal() {
    this.display = !this.display;
  }

  onSubmit() {
    const query = this.form.get('query')?.value;
    if (query) {
      this.chatService.sendMessage(query).subscribe(
        (data) => {
          this.response = data.choices[0].text;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
