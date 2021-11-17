import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  constructor(public navCTRL: NavController, public afs: AngularFirestore) { }

  ngOnInit() {
  }

  register() {

    if ((<HTMLInputElement>document.getElementById("password")).value && (<HTMLInputElement>document.getElementById("name")).value && (<HTMLInputElement>document.getElementById("gender")).value != null &&
      (<HTMLInputElement>document.getElementById("Email")).value && (<HTMLInputElement>document.getElementById("Cellphone")).value && (<HTMLInputElement>document.getElementById("userType")).value) {


      var password = (<HTMLInputElement>document.getElementById("password")).value;
      var cpassword = (<HTMLInputElement>document.getElementById("cpassword")).value;
      var name = (<HTMLInputElement>document.getElementById("name")).value;
      var gender = (<HTMLInputElement>document.getElementById("gender")).value;
      var email = (<HTMLInputElement>document.getElementById("Email")).value;
      var cellphone = (<HTMLInputElement>document.getElementById("Cellphone")).value;
      var userType = (<HTMLInputElement>document.getElementById("userType")).value;
      if (password != cpassword) {
        alert("Passwords are not matching");
      } else {



        return new Promise<any>((resolve, reject) => {
          this.afs.collection('/initiative-user').add({

            password: password,

            name: name,

            gender: gender,

            email: email,


            cellphone: cellphone,

            userType: userType,


          })
            .then(
              (res) => {
                resolve(res);
                alert("Welcome to the platform "+ name  + " Now let's signIn");
                this.navCTRL.navigateBack("");
              },
              err => reject(err)
            )
        })


      }
    } else {
      alert("All fields are required");
    }
    // var password = (<HTMLInputElement>document.getElementById("password")).value;
    // var cpassword = (<HTMLInputElement>document.getElementById("cpassword")).value;


  }

}
