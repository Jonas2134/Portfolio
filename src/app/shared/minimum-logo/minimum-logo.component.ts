import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minimum-logo',
  standalone: true,
  imports: [],
  templateUrl: './minimum-logo.component.html',
  styleUrl: './minimum-logo.component.scss',
})
export class MinimumLogoComponent {
  @Input() width!: number;
  @Input() height!: number;
}
