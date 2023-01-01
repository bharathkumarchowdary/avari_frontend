import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { StickyHeaderDirective } from './sticky-header.directive';
import { HeaderComponent } from './header/header.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgOptimizedImage } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, StickyHeaderDirective, HeaderComponent, ProductListComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, OverlayModule, NgOptimizedImage],
  bootstrap: [AppComponent]
})
export class AppModule {}
