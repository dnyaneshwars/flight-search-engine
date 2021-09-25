import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { HttpClientModule } from '@angular/common/http';
import { NameFilterPipe } from './name-filter.pipe';
import { FormsModule } from '@angular/forms';
import { TicketComponent } from './search-component/ticket/ticket.component';
import { FlightDataService } from './FlightDataService.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    NameFilterPipe,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FlightDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
