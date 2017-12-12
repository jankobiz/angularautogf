import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { ForumsModule } from './components/forums/forums.module';
import { SitesModule } from './components/sites/sites.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: WelcomeComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]),
    ForumsModule,
    SitesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
