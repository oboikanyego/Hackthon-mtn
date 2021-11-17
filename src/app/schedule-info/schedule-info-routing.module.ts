import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleInfoPage } from './schedule-info.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleInfoPageRoutingModule {}
