import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GTranslateModule } from './gtranslate/gtranslate.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GTranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
