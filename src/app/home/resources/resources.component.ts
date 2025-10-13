import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService, Resource } from '../../projects.service';
import { ExternalLink, LucideAngularModule } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';
import { LoadingSpinnerComponent } from '../../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-resources',
  imports: [TranslatePipe, LoadingSpinnerComponent],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent implements OnInit{
  resources!:Array<Resource>;
  loading = true;
  constructor(private service:ProjectsService) {

  }

  ngOnInit() {
    this.service.loadResources(resources => this.setResources(resources));
  }

  setResources(resources:Array<Resource>) {
    this.resources = resources;
    this.loading = false;
  }

}
