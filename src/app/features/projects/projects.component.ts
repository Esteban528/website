import { Component, OnInit, Pipe } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectsService } from '../../core/projects.service';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, LoadingSpinnerComponent, TranslatePipe, CommonModule],
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

