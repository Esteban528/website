import { Component } from '@angular/core';
import { BlogComponent } from '../blog/blog.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-blog-component',
  imports: [BlogComponent, TranslatePipe],
  templateUrl: './blog-component.component.html',
  styleUrl: './blog-component.component.css'
})
export class BlogComponentComponent {

}
