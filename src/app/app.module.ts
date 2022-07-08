import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './root/app.component';
import { FormsModule } from '@angular/forms';
import { BindingCompComponent } from './binding-comp/binding-comp.component';



@NgModule({
  declarations: [
    AppComponent,
    BindingCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
