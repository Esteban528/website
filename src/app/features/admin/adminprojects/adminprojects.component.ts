import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '../../../shared/loading-spinner/loading-spinner.component';
import { environment } from '../../../../environments/environment';
import { ApiRequest, ApiService, Project } from '../../../core/api.service';
import { ProjectsService } from '../../../core/projects.service';

@Component({
  selector: 'app-adminprojects',
  imports: [SidebarComponent, LoadingSpinnerComponent, FormsModule],
  templateUrl: './adminprojects.component.html',
  styleUrl: './adminprojects.component.css'
})
export class AdminprojectsComponent implements OnInit {
  private projects: Array<Project> = [];
  loading = true;
  creating = false;
  editProject!: Project | null;
  user: string = "admin";
  password: string = "admin";

  constructor(private service: ProjectsService, private api: ApiService) {
  }

  ngOnInit(): void {
    this.update();
  }

  setProjects(projects: Array<Project>) {
    this.projects = projects;
    this.loading = false;
  }

  getProjects(): Array<Project> {
    return this.projects;
  }

  edit(project: Project) {
    if (this.editProject && this.editProject.id === project.id) {
      this.editProject = null;
      return;
    }
    this.editProject = Object.assign({}, project);
  }

  confirmEdit() {
    if (!this.editProject)
      return;
    const request: ApiRequest<Object> = {
      url: environment.projectsUrl,
      method: 'put',
      content: this.editProject,
      user: this.user,
      password: this.password,
      on_respond: (res) => {
        this.update()
        this.editProject = null;
      },
      on_error(res) {
      },
    }
    this.api.call(request);
  }

  delete(id: number) {
    const request: ApiRequest<Object> = {
      url: `${environment.projectsUrl}/${id}`,
      method: 'delete',
      user: this.user,
      password: this.password,
      on_respond: (res) => {
        this.update();
        this.editProject = null;
      },
      on_error: (res) => {}
    }
    this.api.call(request);
  }

  update() {
    this.service.loadProjects((p) => this.setProjects(p));
    this.loading = false
  }

  cancelEdit() {
    this.editProject = null;
  }

  toggleCreatePanel() {
    this.creating = !this.creating;
    if (this.creating) {
      this.editProject = {};
    } else {
      this.editProject = null;
    }
  }

  confirmCreate() {
    if (!this.creating || this.editProject == null)
      return
    const p = this.editProject;
    if (p.id != null ||
      this.isEmpty(p.title) ||
      this.isEmpty(p.description) ||
      this.isEmpty(p.visit_url) ||
      this.isEmpty(p.source_url) ||
      this.isEmpty(p.youtube_url) ||
      this.isEmpty(p.image_url)
    ) {
      alert("Invalid project; no field should be empty.")
      return
    }
    const request: ApiRequest<Object> = {
      url: `${environment.projectsUrl}`,
      method: 'post',
      content: this.editProject,
      user: this.user,
      password: this.password,
      on_respond: (res) => {
        if (!res) {
          this.editProject = null;
          this.creating = false;
          this.update();
          return;
        }
      },
      on_error: (res) => alert("something was wrong, review the fields")
    }
    this.api.call(request);
  }

  isEmpty(field: string | null | undefined) {
    return field == undefined || field == null || field == ""
  }
}
