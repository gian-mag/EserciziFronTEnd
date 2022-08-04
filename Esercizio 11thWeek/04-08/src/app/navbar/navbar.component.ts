import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogged = this.auth$.logged;

  constructor(private auth$: AuthService) { }

  ngOnInit(): void {

  }

  logout(): void {
    this.auth$.logout();
  }

}
