import { Component } from '@angular/core';
import { User } from './model/user';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Profile', url: 'profile', icon: 'person' },
    { title: 'Subscriptions', url: 'subscriptions', icon: 'heart' },
    { title: 'logout', url: '', icon: 'log-out' },
  ];
  public labels = [];
  user: User;
  name:string;
  constructor() {
    this.user = JSON.parse(sessionStorage.getItem("loggedinUser"));
    if(this.user!=null){
      this.name = this.user.name;
    }
   
  }
}
