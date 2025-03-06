import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-message-confirmation',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './message-confirmation.component.html',
  styleUrl: './message-confirmation.component.scss'
})
export class MessageConfirmationComponent {

}
