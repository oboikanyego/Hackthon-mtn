import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../model/user';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  users: User[];
  user: User;
  existingUser: boolean = false;

  constructor(public navCTRL: NavController, public afs: AngularFirestore,) {
    sessionStorage.clear();
    this.afs.collection('initiative-user').valueChanges({ idField: 'userID'}).subscribe(users => { 
      sessionStorage.setItem('initiative-user', JSON.stringify(users));
    });;;

  }

  ngOnInit() {
  }

  login() {
    console.log("login() :")

    this.users = JSON.parse(sessionStorage.getItem('initiative-user'));
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    this.users.forEach(element => {
      if (element.email === email && element.password === password) {
        this.user = element;
        sessionStorage.setItem("loggedinUser", JSON.stringify(this.user))
        this.existingUser = true;
      }
    });
    if (this.existingUser === true) {
      this.navCTRL.navigateForward('home')
    } else {
      alert('email or password is incorect');
    }

  }
  register() {
    this.navCTRL.navigateForward('register')
  }
}
