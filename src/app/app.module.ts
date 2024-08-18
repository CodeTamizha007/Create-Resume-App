import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AngularMaterial } from './angular.material';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TempleselectionComponent } from './templeselection/templeselection.component';
import { CreateresumeComponent } from './createresume/createresume.component';
import { ResumeStepperComponent } from './resume-stepper/resume-stepper.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    TempleselectionComponent,
    CreateresumeComponent,
    ResumeStepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...AngularMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
