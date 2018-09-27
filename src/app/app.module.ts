import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavigationComponent} from './navigation/navigation.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'createtask', component: CreateTaskComponent },
  { path: 'modifytask/:id', component: ModifyTaskComponent }
];

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { CreateTaskComponent } from './create-task/create-task.component';
import { ModifyTaskComponent } from './modify-task/modify-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateTaskComponent,
    NavigationComponent,
    ModifyTaskComponent
  ],
  imports: [
  BrowserModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  BrowserAnimationsModule,
  BrowserModule,
  MatCardModule,
  MatMenuModule,
  MatInputModule,
  BrowserAnimationsModule,
  MatSelectModule,
  MatButtonModule,
  MatListModule,
  FormsModule,
  MatIconModule,
  ReactiveFormsModule,
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
