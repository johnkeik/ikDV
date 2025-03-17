import { Component } from '@angular/core';
import { InvertedBorderComponent } from '../../shared/inverted-border/inverted-border.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { ChooseComponent } from "./choose/choose.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InvertedBorderComponent, WhatWeDoComponent, WorkflowComponent, ChooseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
