import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './root/app.component';
import { FormsModule } from '@angular/forms';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { TimerWatchComponent } from './timer-watch/timer-watch.component';
// import { BindingCompComponent } from './binding-comp/binding-comp.component';



@NgModule({
  declarations: [
    AppComponent,
    StopWatchComponent,
    TimerWatchComponent  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
