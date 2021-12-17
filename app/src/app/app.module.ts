import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerViewComponent } from './components/server-view/server-view.component';
import { ClientsViewComponent } from './components/clients-view/clients-view.component';
import { ClientComponent } from './components/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerViewComponent,
    ClientsViewComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
