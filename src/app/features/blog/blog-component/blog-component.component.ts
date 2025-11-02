import { Component } from '@angular/core';
import { BlogComponent } from '../blog.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-blog-component',
  imports: [BlogComponent, TranslatePipe],
  templateUrl: './blog-component.component.html',
})
export class BlogHomeboard {

}
