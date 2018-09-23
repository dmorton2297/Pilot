import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrumBoardComponent } from './scrum-board/scrum-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrumBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
