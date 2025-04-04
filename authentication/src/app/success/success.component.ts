import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {
  private authService = inject(AuthService)
  private router = inject(Router)

  logout(event: Event) {
    event.preventDefault()

    this.authService.logout()
    .then(() => {
      alert("Bruger logget ud!")
      this.router.navigateByUrl("/login")
    })
    .catch(error => {
      console.error("Fejl: " + error.message)
    })
  }
}
