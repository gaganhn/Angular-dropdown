import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterByKeyPipe } from './filter-by-key.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterByKeyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
