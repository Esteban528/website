import { Component, OnInit } from '@angular/core';
import { ExternalLink, GitMerge, LucideAngularModule } from 'lucide-angular';
import { Project, ProjectsService } from '../../projects.service';
import { RouterLink } from '@angular/router';
import { LoadingSpinnerComponent } from '../../loading-spinner/loading-spinner.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, LoadingSpinnerComponent, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project> = [];
  loading = true;

  constructor(private projectService: ProjectsService) {
  }

  ngOnInit(): void {
    this.projectService.loadProjects((result: Array<Project>) => this.setProjects(result));
  }

  setProjects(result: Array<Project>) {
    this.projects = result;
    this.loading = false;
  }
}

