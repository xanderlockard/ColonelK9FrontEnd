import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css'
})
export class ChatboxComponent {

}
