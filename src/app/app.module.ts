import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PresentationModule} from "./presentation/presentation.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PresentationModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
