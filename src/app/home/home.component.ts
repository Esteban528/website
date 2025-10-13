import { Component } from '@angular/core';
import { LucideAngularModule, Mail, Linkedin, Github } from 'lucide-angular';
import { ProjectsComponent } from './projects/projects.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProfileComponent } from './profile/profile.component';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-home',
  imports: [ProjectsComponent,
    ResourcesComponent,
    TranslateDirective,
    BlogComponent,
    TranslatePipe],
  templateUrl: './home.component.html',
})

export class HomeComponent {
}
