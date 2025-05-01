import { Component } from '@angular/core';
import { ExternalLink, GitMerge, LucideAngularModule } from 'lucide-angular';
import { Project, ProjectsService } from '../../projects.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly ExternalLink = ExternalLink;
  readonly GitMerge = GitMerge;
  projects: Array<Project> = [];

  constructor(private projectService: ProjectsService) {
    projectService.loadProjects((result:Array<Project>) => this.setProjects(result));
  }

  setProjects(result: Array<Project>) {
    this.projects = result;
  }
}

