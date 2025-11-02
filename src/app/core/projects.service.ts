import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ApiRequest, ApiService, Project, Resource } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private api: ApiService) { }

  loadProjects(func: (projects: Project[]) => void) {
    const request: ApiRequest<Project[]> = {
      url: environment.projectsUrl,
      method: 'get',
      on_respond: (res) => {
        func(res)
      },
      on_error(res) {},
    }

    this.api.call(request);
  }

  loadProject(index: number, func: (project: Project) => void) {
    this.loadProjects((projects) =>
      func(projects[index])
    )
  }

  loadResources(func: (projects: Resource[]) => void) {
    const request: ApiRequest<Resource[]> = {
      url: environment.resourcesUrl,
      method: 'get',
      on_respond: (res) => {
        func(res)
      },
      on_error(res) {},
    }

    this.api.call(request);
  }
}

