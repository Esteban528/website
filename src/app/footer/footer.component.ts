import { Component } from '@angular/core';
import { LocationEdit, LucideAngularModule, Mail, MapPinned } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly Mail = Mail;
  readonly Location = MapPinned;
  email = "esteban@estebandev.xyz";
}
