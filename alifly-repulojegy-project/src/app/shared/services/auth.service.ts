import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: boolean = false;

  constructor(private auth: AngularFireAuth) { }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.loggedIn = true;
    })
    .catch((error) => {
      if (error.code === 'auth/wrong-password') {
        // Rossz jelszó hiba
        console.log('Rossz jelszó');
      } else {
        // Egyéb hiba
        console.error(error);
      }
    });
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  isUserLoggedIn() {
    return this.auth.user;
  }

  logout() {
    return this.auth.signOut();
  }

}
