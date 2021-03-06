import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerViewComponent } from './components/server-view/server-view.component';
import { ClientsViewComponent } from './components/clients-view/clients-view.component';
import { ClientComponent } from './components/client/client.component';
import { NodeComponent } from './components/node/node.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ServerViewComponent,
    ClientsViewComponent,
    ClientComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
