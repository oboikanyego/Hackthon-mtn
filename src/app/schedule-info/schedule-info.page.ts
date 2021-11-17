import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Schedule } from '../model/schedule';
import { User } from '../model/user';

@Component({
  selector: 'app-schedule-info',
  templateUrl: './schedule-info.page.html',
  styleUrls: ['./schedule-info.page.scss'],
})
export class ScheduleInfoPage implements OnInit {
  user: User;
  schedule: Schedule;
  constructor(public afs: AngularFirestore, public navCtrl: NavController) {

    this.user = JSON.parse(sessionStorage.getItem("loggedinUser"));
    this.schedule = JSON.parse(sessionStorage.getItem("clickedSchedule"));

  }

  ngOnInit() {
  }

  back() {
    this.navCtrl.navigateBack('home');
  }

  live() {

  }
  delete() {
   
    this.navCtrl.navigateBack('home');
  }
}
