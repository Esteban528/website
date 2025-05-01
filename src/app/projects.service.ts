import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  loadProjects(func: (projects: Project[]) => void) {
    this.http.get<Project[]>('/projects.json').subscribe(func);
  }

  loadProject(index: number, func: (project: Project) => void) {
    this.loadProjects((projects) =>
      func(projects[index])
    )
  }

  loadResources(func: (projects: Resource[]) => void) {
    this.http.get<Project[]>('/resources.json').subscribe(func);
  }
}

export type Project = {
  title: string;
  short_description: string;
  description: string;
  stack: Array<String>;
  link: string;
  source_code: string;
  image_url: string;
  youtube_url: string;
}

export type Resource = {
  title: string;
  description: string;
  link: string;
  image_url: string;
}
