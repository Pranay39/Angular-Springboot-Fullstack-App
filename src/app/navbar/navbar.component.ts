import { Component, OnInit } from '@angular/core';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showNav : boolean = UserLoginComponent.isLoggedIn;
  
 

  constructor() { }

  ngOnInit(): void {
    
  }

}
