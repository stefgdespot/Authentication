import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild("emailInput") emailInput!: ElementRef
  @ViewChild("passwordInput") passwordInput!: ElementRef

  private authService = inject(AuthService)
  private router = inject(Router)

  login(event: Event) {
    event.preventDefault()

    const email = this.emailInput.nativeElement.value
    const password = this.passwordInput.nativeElement.value

    this.authService.login(email, password)
    .then(() => {
      alert("Bruger logget ind!")
      console.log("Bruger logget ind som: " + email)
      
      this.router.navigateByUrl("/success")
    })
    .catch(error => console.error("Fejl: " + error.message))
  }
}
