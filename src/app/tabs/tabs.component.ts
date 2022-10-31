import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  log: string="se connecter";
  user:any;
  isLogin!: boolean;
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  ngOnInit(): void {
  }

  setUser(user:any): void {
    this.user = user;
    console.log(user);
  }
  login(){
    this.auth.loginWithRedirect();
    this.isLogin=true;
    this.log= "se deconnecter"

  }
  isLogged(){
    return this.isLogin
  }
}
