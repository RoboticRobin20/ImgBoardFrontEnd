import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserLogin } from '../models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl: string = "http://localhost:8050";
  token: Observable<string>;
  currentUser: Observable<User>;
  private currentUserSubject = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }
  authenticate(userLogin: UserLogin): Observable<string> {
    this.token = this.http.post<string>(this.baseUrl + "/login", {"email": userLogin.email, "password": userLogin.password});
    return this.token;
  }

  registerUser(user: User) {
    return this.http.post<User>(this.baseUrl + '/user', user);
  }

  setCurrentUser(email: string) {
    this.http.get<User>(this.baseUrl + '/user/' + email).subscribe(user =>{
      localStorage.setItem('user', JSON.stringify(user));
    });
  }

  getCurrentUser(): Observable<User>{
    if(this.currentUser == null){
      this.token = JSON.parse(localStorage.getItem('token'));
      this.currentUser = JSON.parse(localStorage.getItem('user'));
    }
    console.log('currentuser', this.currentUser);
    return this.currentUser;
  }

  isLoggedIn() {
    if(localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }
}
