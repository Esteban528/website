import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService, Resource } from '../../projects.service';
import { ExternalLink, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-resources',
  imports: [LucideAngularModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent implements OnInit{
  resources!:Array<Resource>;
  readonly ExternalLink = ExternalLink;

  constructor(private service:ProjectsService) {

  }

  ngOnInit() {
    this.service.loadResources(resources => this.setResources(resources));
  }

  setResources(resources:Array<Resource>) {
    this.resources = resources;
  }

}
