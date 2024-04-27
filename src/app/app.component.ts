import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutUsComponent } from './portfolio/about-us/about-us.component';
import { ContactUsComponent } from './portfolio/contact-us/contact-us.component';
import { EmployeeComponent } from './portfolio/employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, AboutUsComponent, ContactUsComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17-demo';
}
