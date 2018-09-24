import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavigationComponent} from './navigation/navigation.component';
import {MatButtonModule} from '@angular/material/button';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'scrum', component: ScrumBoardComponent }
];

import { ScrumBoardComponent } from './scrum-board/scrum-board.component';

import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    NavigationComponent,
    ScrumBoardComponent
=======
    CreateTaskComponent,
    NavigationComponent
>>>>>>> feat/createtask
  ],
  imports: [
  BrowserModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  BrowserAnimationsModule,
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
