import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TranslateService,
} from "@ngx-translate/core"
import { HeaderComponent } from './shared/header/header-component.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',

  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
})

export class AppComponent {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['es', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }
}
