import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateDataModule } from './create-data/create-data.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    CreateDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
