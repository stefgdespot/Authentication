import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  @ViewChild("emailInput") emailInput!: ElementRef
  @ViewChild("passwordInput") passwordInput!: ElementRef

  private authService = inject(AuthService)
  private router = inject(Router)

  signUp(event: Event) {
    event?.preventDefault()

    const email = this.emailInput.nativeElement.value
    const password = this.passwordInput.nativeElement.value

    this.authService.signUp(email, password)
    .then(() => {
      alert("Bruger oprettet!")
      console.log("Bruger har oprettet kontoen:" + email)
      
      this.router.navigateByUrl("/success")
    })
    .catch(error => console.error("Fejl: " + error.message))
  }
}
