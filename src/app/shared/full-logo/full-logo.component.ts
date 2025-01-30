import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-full-logo',
  standalone: true,
  imports: [],
  templateUrl: './full-logo.component.html',
  styleUrl: './full-logo.component.scss'
})
export class FullLogoComponent {
  @Input() width!: number;
  @Input() height!: number;
}
