import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ScrumBoardComponent } from './scrum-board/scrum-board.component';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from './navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpModule }  from '@angular/http';
import { ModifyTaskComponent } from './modify-task/modify-task.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule} from '@angular/material/autocomplete'; 
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { FuncReqFormComponent } from './func-req-form/func-req-form.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { BacklogComponent } from './backlog/backlog.component';

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular5-social-login";
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { MainComponent } from './main/main.component';
import { NewMessageComponent } from './new-message/new-message.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'backlog', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'createtask', component: CreateTaskComponent },
  { path: 'backlog', component: MainComponent },
  { path: 'newmessage', component: NewMessageComponent },
  { path: 'scrum', component: ScrumBoardComponent },
  { path: 'modifytask/:id', component: ModifyTaskComponent },
  { path: 'funcreq', component: FuncReqFormComponent }
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
    NavigationComponent,
    ScrumBoardComponent,
    CreateTaskComponent,
    ScrumBoardComponent,
    ModifyTaskComponent,
    BacklogComponent,
    MainComponent,
    FuncReqFormComponent,
    NewMessageComponent
    ],
  imports: [
  BrowserModule,
  HttpModule,
  MatAutocompleteModule,
  MatCardModule,
  MatSnackBarModule,
  ReactiveFormsModule,
  FormsModule,
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
  MatIconModule,
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getGoogleConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }