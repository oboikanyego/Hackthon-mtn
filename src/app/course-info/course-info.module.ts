import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseInfoPageRoutingModule } from './course-info-routing.module';

import { CourseInfoPage } from './course-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseInfoPageRoutingModule
  ],
  declarations: [CourseInfoPage]
})
export class CourseInfoPageModule {}
