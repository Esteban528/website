import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { BlogComponent } from '../blog/blog.component';
import { RouterLink } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { ResourcesComponent } from '../resources/resources.component';

@Component({
  selector: 'app-home',
  imports: [
    ProjectsComponent,
    ResourcesComponent,
    BlogComponent,
    TranslatePipe, RouterLink],
  templateUrl: './home.component.html',
})

export class HomeComponent {
}
