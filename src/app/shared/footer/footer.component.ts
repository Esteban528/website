import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LocationEdit, LucideAngularModule, Mail, MapPinned } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, TranslatePipe],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly Mail = Mail;
  readonly Location = MapPinned;
  email = "esteban@estebandev.cc";
}
