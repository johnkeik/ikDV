import { Component } from '@angular/core';
import { ServiceComponent } from './service/service.component';
import { Service } from '../../core/models/services.model';
import { servicesArray } from '../../core/models/services-array';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services = servicesArray;
    
}
