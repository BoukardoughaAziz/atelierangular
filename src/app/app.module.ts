import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';
import { InvoiceListComponentComponent } from './invoice-list-component/invoice-list-component.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInvoiceComponentComponent,
    InvoiceListComponentComponent,
    InvoiceComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
