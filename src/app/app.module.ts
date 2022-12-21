import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { StickyHeaderDirective } from './sticky-header.directive';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, StickyHeaderDirective, HeaderComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
