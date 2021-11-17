import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Course } from '../model/course';
import { Mycourse } from '../model/mycourse';
import { Schedule } from '../model/schedule';
import { Subscription } from '../model/subscription';
import { User } from '../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: User;
  users: User[];
  name: string;
  subscriptions: Subscription[]=[];
  schedule: Schedule[]=[];
  mySchedule: Schedule[] =[];
  courses: Course[];
  myCourses: Mycourse[] = [];
  myCourse: Mycourse = new Mycourse();;
  facilitator: User;
  mycourses: Course[] = [];
  mycourse: Course = new Course();
  facilatatorName: string = ""


  constructor(public afs: AngularFirestore, public navCtrl: NavController) {
    this.user = JSON.parse(sessionStorage.getItem("loggedinUser"));

    this.afs.collection('initiative-course').valueChanges({ idField: 'courseID' }).subscribe(subscriptions => {
      sessionStorage.setItem('initiative-course', JSON.stringify(subscriptions));
    });;;

    if (this.user.userType === 'student') {
      this.afs.collection('initiative-subscriptions').valueChanges().subscribe(subscriptions => {
        sessionStorage.setItem('initiative-subscriptions', JSON.stringify(subscriptions));
        this.getMySubscriptions();
      });;;
    }
    if (this.user.userType === 'Tutor') {
    this.afs.collection('initiative-tutor-schedule').valueChanges({ idField: 'scheduleID' }).subscribe(subscriptions => {
      sessionStorage.setItem('initiative-tutor-schedule', JSON.stringify(subscriptions));
      this.getMySchedule();
    });;;
  }

  }

  ngOnInit() {
  }
  getMySubscriptions() {
    this.subscriptions = JSON.parse(sessionStorage.getItem('initiative-subscriptions'));

    this.subscriptions.forEach(subs => {
      console.log("element.studentID ", subs.studentID);
      console.log("this.user.userID ", this.user.userID);
      console.log("element.studentID === this.user.userID ", subs.studentID === this.user.userID);
      if (subs.studentID === this.user.userID) {
        this.courses = JSON.parse(sessionStorage.getItem('initiative-course'));
        this.courses.forEach(element => {
          if (element.courseID === subs.courseID) {
            console.log(JSON.stringify(element));
            this.getCourseInfo(element.courseID)

          }

        });
      }
    });

  }
  getCourseInfo(courseID) {

    console.log("getCourseInfo(courseID) ", courseID);
    this.courses = JSON.parse(sessionStorage.getItem('initiative-course'));
    this.courses.forEach(element => {
      if (element.courseID === courseID) {
        this.getFacitatorName(element.facilitatorID);
        this.mycourses.push(element);
        this.myCourse.category = element.category;
        this.myCourse.duration = element.duration
        this.myCourse.facilitator_name = this.facilatatorName;
        this.myCourse.end_date = element.end_date;
        this.myCourse.name = element.name;
        this.myCourse.fee = element.fee;
        this.myCourse.occurance = element.occurance;
        this.myCourse.time = element.time;
        this.myCourse.start_date = element.start_date;

        this.myCourses.push(this.myCourse);
      }

    });


  }
  getFacitatorName(facilitatorID) {
    this.users = JSON.parse(sessionStorage.getItem('initiative-user'));
    this.users.forEach(element => {
      if (element.userID === facilitatorID) {
        this.facilitator = element;
      }

    });
    console.log(this.facilitator.name);
    this.facilatatorName = this.facilitator.name;
    return this.facilatatorName;
  }

  courseInfo(course) {
    console.log(" courseInfo(course) :", course);
    sessionStorage.setItem("clickedCourse", JSON.stringify(course));
    this.navCtrl.navigateForward("course-info");

  }

  getMySchedule() {
    this.schedule = JSON.parse(sessionStorage.getItem('initiative-tutor-schedule'));

    this.schedule.forEach(schedule => {
      if (schedule.tutor_id === this.user.userID) {

        this.mySchedule.push(schedule);
        sessionStorage.setItem('mySchedule', JSON.stringify(this.mySchedule));
      }

    });

  }

  myScheduleInfo(mySchedule){
    sessionStorage.setItem("clickedSchedule", JSON.stringify(mySchedule));
    this.navCtrl.navigateForward("schedule-info");
  }
}
