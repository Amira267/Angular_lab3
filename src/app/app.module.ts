import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent/parent.component';
import { RegisterationComponent } from './components/registeration/registeration/registeration.component';
import { StudentsComponent } from './components/students/students/students.component';
import { HomeComponent } from './components/routing/home/home.component';
import { UserDetailsComponent } from './components/routing/user-details/user-details.component';
import { ProfileComponent } from './components/routing/profile/profile.component';
import { ErrorComponent } from './components/routing/error/error.component';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './components/routing/header/header.component';

let routs:Routes =[
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"home/:id",component:UserDetailsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"**",component:ErrorComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    RegisterationComponent,
    StudentsComponent,
    HomeComponent,
    UserDetailsComponent,
    ProfileComponent,
    ErrorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
