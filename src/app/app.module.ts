import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ScrumBoardComponent } from './scrum-board/scrum-board.component';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavigationComponent} from './navigation/navigation.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { HttpModule}  from '@angular/http';
import { ModifyTaskComponent } from './modify-task/modify-task.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

import { BacklogComponent } from './backlog/backlog.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'backlog', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'createtask', component: CreateTaskComponent },
  { path: 'modifytask/:id', component: ModifyTaskComponent },
  { path: 'backlog', component: BacklogComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateTaskComponent,
    NavigationComponent,
    ScrumBoardComponent,
    ModifyTaskComponent,
    BacklogComponent
  ],
  imports: [
  BrowserModule,
  HttpModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatTableModule,
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
