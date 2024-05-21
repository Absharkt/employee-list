import { Injectable } from '@angular/core';
import { Router } from "@angular/router"


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  // username and password for login
  username = 'touchworld'
  password = 'touchworldTech'

  isLoggedIn: boolean = false

  validate(form: any){    
    if (form.value.username === this.username && form.value.password === this.password) {
      this.isLoggedIn = true;
      this.router.navigate(['/employee-list']);
    } else {
      this.isLoggedIn = false;
    }
  }

}
