import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Course } from '../model/course';
import { Mycourse } from '../model/mycourse';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.page.html',
  styleUrls: ['./course-info.page.scss'],
})
export class CourseInfoPage implements OnInit {
  course: Mycourse = new Mycourse();

  constructor(public navCtrl: NavController) {

    this.course = JSON.parse(sessionStorage.getItem("clickedCourse"));
  }

  ngOnInit() {
  }

  back() {
    this.navCtrl.navigateBack("home");
  }
  Unsubscribe() {

  }
}
