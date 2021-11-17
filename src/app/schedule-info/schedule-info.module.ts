import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleInfoPageRoutingModule } from './schedule-info-routing.module';

import { ScheduleInfoPage } from './schedule-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleInfoPageRoutingModule
  ],
  declarations: [ScheduleInfoPage]
})
export class ScheduleInfoPageModule {}
