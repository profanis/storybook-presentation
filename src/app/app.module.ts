import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SelectComponent, ToggleModule } from '@my-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
