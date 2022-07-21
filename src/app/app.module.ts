import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { GameGridComponent } from './pages/game-grid/game-grid.component';
import { GameCardComponent } from './pages/game-grid/game-card/game-card.component';

@NgModule({
  declarations: [AppComponent, NavComponent, GameGridComponent, GameCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
