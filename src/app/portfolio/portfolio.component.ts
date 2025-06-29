import { Component } from '@angular/core';
import { ProjectsComponent } from '../home/projects/projects.component';
import { ResourcesComponent } from '../home/resources/resources.component';
import { ProfileComponent } from '../home/profile/profile.component';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectsComponent, ResourcesComponent, ProfileComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
