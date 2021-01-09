import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../../models/user-login.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted : boolean = false;
  userLogin: UserLogin = new UserLogin('', '');
  
  constructor(private _authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._authenticationService.authenticate(this.userLogin).subscribe(result => {
      localStorage.setItem("token", JSON.parse(JSON.stringify(result)).token);
      this._authenticationService.setCurrentUser(this.userLogin.email);
      this.router.navigate(['/images']);
    });
  }
}
