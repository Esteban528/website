import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { ResourcesComponent } from './resources/resources.component';
import { TranslatePipe } from '@ngx-translate/core';
import { BlogComponent } from '../blog/blog.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ProjectsComponent,
    ResourcesComponent,
    BlogComponent,
    TranslatePipe, RouterLink],
  templateUrl: './home.component.html',
})

export class HomeComponent {
}
