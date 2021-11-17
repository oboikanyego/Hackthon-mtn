import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseInfoPage } from './course-info.page';

const routes: Routes = [
  {
    path: '',
    component: CourseInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseInfoPageRoutingModule {}
