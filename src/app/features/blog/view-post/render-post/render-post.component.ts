import { Component, input, OnInit } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { UtilsService } from '../../../../core/utils.service';
import { Post } from '../../../../core/api.service';

@Component({
  selector: 'render-post',
  imports: [MarkdownModule],
  templateUrl: './render-post.component.html',
})
export class RenderPostComponent{
  post = input({})

  constructor(public util:UtilsService) {

  }

  getPost():Post {
    return this.post()
  }
}
