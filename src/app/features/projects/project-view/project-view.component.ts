import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.componen';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectsService } from '../../../core/projects.service';
import { Project } from '../../../core/api.service';

@Component({
  selector: 'app-project-view',
  imports: [RouterLink, YoutubePlayerComponent, TranslatePipe],
  templateUrl: './project-view.component.html',
})
export class ProjectViewComponent {
  project!:Project;

  constructor(private service:ProjectsService) {

  }

  @Input()
  set id(id:number) {
    this.service.loadProject(id, project => this.setProject(project));
  }

  setProject(project:Project) {
    this.project = project;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
