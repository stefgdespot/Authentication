import { Injectable, inject } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { sendEmailVerification, sendSignInLinkToEmail } from "firebase/auth";

@Injectable({ providedIn: "root" })
export class AuthService {
    private auth = inject(Auth)

    signUp(email: string, password: string) {
        return createUserWithEmailAndPassword(this.auth, email, password)
          .then(userCredential => {
            return sendEmailVerification(userCredential.user)
          })
      }

    login(email: string, password: string) {
        return signInWithEmailAndPassword(this.auth, email, password)
    }

    logout() {
        return signOut(this.auth)
    }
}