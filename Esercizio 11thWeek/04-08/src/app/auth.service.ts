import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthResponse, AuthUser, UserLogin, UserSignup } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:3000/";

  logged = false;

  // Observable dell'authentication

  authSub = new BehaviorSubject<false | AuthUser>(false)
  authObs = this.authSub.asObservable();

  constructor(private http: HttpClient) { //se esiste res è true, altrimenti è false
  // -1 faccio il login
  // -2 se trovo il mio utente allora logged == true,
  // -3 altrimenti false
    this.authObs.subscribe((res)=> {
      this.logged = res ? true : false
    })
  }

  signUp(user: UserSignup) {
    this.http.post<AuthResponse>(this.url + "signup", user).subscribe((res) => {
      console.log("signup OK");
      localStorage.setItem("token", res.accessToken);
      this.authSub.next(res.user);
    })
  }

  login(user: UserLogin) {
      this.http.post<AuthResponse>(this.url + "login", user).subscribe((res) => {
        console.log("login OK");
        localStorage.setItem("token", res.accessToken);
        this.authSub.next(res.user);
      })
  }

  logout() {
    localStorage.removeItem("token");
    this.authSub.next(false);
  }
}
