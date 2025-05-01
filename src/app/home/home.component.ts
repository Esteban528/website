import { Component } from '@angular/core';
import { LucideAngularModule, Mail, Linkedin, Github } from 'lucide-angular';
import { ProjectsComponent } from './projects/projects.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule, ProjectsComponent, ResourcesComponent, ProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  readonly Mail = Mail;
  readonly Linkedin = Linkedin;
  readonly Github = Github;
}
