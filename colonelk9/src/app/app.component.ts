import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChatboxComponent } from './chatbox/chatbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ChatboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'colonelk9';
}
