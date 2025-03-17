import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workflow.component.html',
  styleUrl: './workflow.component.scss'
})
export class WorkflowComponent {

   processSteps = [
    {
      imgSrc: "../../../../assets/images/workflow/bulb.svg",
      title: "Understanding Your Needs",
      description: "The first and most important step is to meet with you to understand your needs and expectations. This helps us create a product that fully aligns with your goals."
    },
    {
      imgSrc: "../../../../assets/images/workflow/pencil.svg",
      title: "Planning & Initial Designs",
      description: "At this stage, we determine the exact cost and timeline for your product. You’ll also receive demo designs where you can provide feedback to ensure the final product meets your expectations."
    },
    {
      imgSrc: "../../../../assets/images/workflow/tablets.svg",
      title: "Development",
      description: "We focus on delivering exceptional results by using modern techniques and innovative designs. Our priority is to create a high-quality product that offers a seamless and engaging user experience."
    },
    {
      imgSrc: "../../../../assets/images/workflow/user-voice.svg",
      title: "Testing",
      description: "Your product will be thoroughly tested across various devices, environments, and by demo users. Any bugs or issues will be resolved, and the design or functionality will be improved if needed."
    },
    {
      imgSrc: "../../../../assets/images/workflow/message.svg",
      title: "Delivery & Support",
      description: "Your product is ready! We’ll ensure it’s optimized for your needs and provide guidance on how to make the most of it. Additionally, you own the product code, and we can provide it to you upon request. Our team remains available to support you with any questions or concerns."
    }
  ];
  
}
