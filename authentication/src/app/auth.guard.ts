import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { authState } from 'rxfire/auth';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return authState(auth).pipe(
    map(user => {
      if (user && user.emailVerified) {
        return true;
      } else {
        alert("Du skal være logget ind og have bekræftet din email.")
        return router.createUrlTree(['/login']);
      }
    })
  );
};