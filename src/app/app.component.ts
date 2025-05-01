import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'portfolio';
}
