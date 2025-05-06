import { Component, Input } from '@angular/core';
import { Project, ProjectsService } from '../projects.service';
import { RouterLink } from '@angular/router';
import { ExternalLink, Github, GitMerge, LucideAngularModule, Undo2 } from 'lucide-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.componen';

@Component({
  selector: 'app-project-view',
  imports: [RouterLink, YoutubePlayerComponent],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.css'
})
export class ProjectViewComponent {
  project!:Project;

  constructor(private service:ProjectsService, private sanitizer:DomSanitizer) {

  }

  @Input()
  set id(id:number) {
    this.service.loadProject(id, project => this.setProject(project));
  }

  setProject(project:Project) {
    this.project = project;
  }
}
