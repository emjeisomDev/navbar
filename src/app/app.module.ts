import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';
import { MediasComponent } from './medias/medias.component';
import { SettingsComponent } from './settings/settings.component';
import { BodyComponent } from './body/body.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    PagesComponent,
    MediasComponent,
    SettingsComponent,
    BodyComponent,
    SublevelMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
