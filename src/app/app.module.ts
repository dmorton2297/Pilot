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
import {MatTableModule} from '@angular/material/table';
import {NavigationComponent} from './navigation/navigation.component';
import {MatButtonModule} from '@angular/material/button';
import { BacklogComponent } from './backlog/backlog.component';
import { ModifyTaskComponent } from './modify-task/modify-task.component';


import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular5-social-login";
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

const appRoutes: Routes = [
  { path: '', redirectTo: 'backlog', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'createtask', component: CreateTaskComponent },
  { path: 'modifytask/:id', component: ModifyTaskComponent },
  { path: 'backlog', component: BacklogComponent}
];

export function getGoogleConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("941718367028-f0550rgrm90usorok0jd3vsd9vopjqi4.apps.googleusercontent.com")
      },
    ]
  );
  return config;
}



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
  SocialLoginModule,
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
<<<<<<< HEAD

  providers: [],
=======
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getGoogleConfigs
    }
  ],
>>>>>>> feat/authent
  bootstrap: [AppComponent]
})
export class AppModule { }