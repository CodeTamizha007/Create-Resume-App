import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateresumeComponent } from './createresume/createresume.component';
import { ResumeStepperComponent } from './resume-stepper/resume-stepper.component';
import { ResumeComponent } from './resume/resume.component';
import { Reume1Component } from './reume1/reume1.component';

const routes: Routes = [
  {path:"createResume",component:CreateresumeComponent},
  {path:"resumeStepper",component:ResumeStepperComponent},
  {path:'res',component:ResumeComponent},
  {path:'res1',component:Reume1Component},
  {path:"**",redirectTo:'createResume'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
