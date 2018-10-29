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
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { FuncReqFormComponent } from './func-req-form/func-req-form.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthService } from './auth.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';




import { BacklogComponent } from './backlog/backlog.component';

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular5-social-login";
import { MainComponent } from './main/main.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { ModifyTeamComponent } from './modify-team/modify-team.component';
import { TeamsComponent } from './teams/teams.component';
import { ViewTeamComponent } from './view-team/view-team.component';
import { TeaminvitationsComponent } from './teaminvitations/teaminvitations.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { InviteToTeamComponent } from './invite-to-team/invite-to-team.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'backlog', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'createtask', component: CreateTaskComponent, canActivate: [AuthService]  },
  { path: 'backlog', component: MainComponent, canActivate: [AuthService]  },
  { path: 'invites', component: TeaminvitationsComponent, canActivate: [AuthService] },
  { path: 'scrum', component: ScrumBoardComponent, canActivate: [AuthService] },
  { path: 'modifytask/:id', component: ModifyTaskComponent, canActivate: [AuthService] },
  { path: 'funcreq', component: FuncReqFormComponent, canActivate: [AuthService] },
  { path: 'createteam', component: CreateTeamComponent, canActivate: [AuthService] },
  { path: 'modifyteam/:id', component: ModifyTeamComponent, canActivate: [AuthService] },
  { path: 'teams', component: TeamsComponent, canActivate: [AuthService]},
  { path: 'viewteam/:id', component: ViewTeamComponent, canActivate: [AuthService]},
  { path: 'inviteToTeam/:teamid', component: InviteToTeamComponent, canActivate: [AuthService]} 
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
    CreateTeamComponent,
    ModifyTeamComponent,
    TeamsComponent,
    ViewTeamComponent,
    TeaminvitationsComponent,
    InviteToTeamComponent,
    ],
  imports: [
  BrowserModule,
  HttpModule,
  MatAutocompleteModule,
  MatCardModule,
  MatSnackBarModule,
  MatTabsModule,
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatExpansionModule,
  
  MatTableModule,
  FormsModule,
  ReactiveFormsModule,
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
    AuthService,
    {
      provide: AuthServiceConfig,
      useFactory: getGoogleConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }