import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateresumeComponent } from './createresume/createresume.component';
import { ResumeStepperComponent } from './resume-stepper/resume-stepper.component';

const routes: Routes = [
  {path:"createResume",component:CreateresumeComponent},
  {path:"resumeStepper",component:ResumeStepperComponent},
  {path:"**",redirectTo:'createResume'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
