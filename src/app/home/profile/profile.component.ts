import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Dot, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-profile',
  imports: [LucideAngularModule, NgOptimizedImage],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  readonly Dot = Dot;

}
