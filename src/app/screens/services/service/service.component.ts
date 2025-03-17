import { Component, input } from '@angular/core';
import { Service } from '../../../core/models/services.model';
import { InvertedBorderComponent } from '../../../shared/inverted-border/inverted-border.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [InvertedBorderComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  service = input.required<Service>();
}
