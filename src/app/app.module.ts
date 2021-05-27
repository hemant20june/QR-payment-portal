import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ZXingScannerModule } from "@zxing/ngx-scanner";

import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";
import { ThirdStepComponent } from './third-step/third-step.component';
import { FourthStepComponent } from './fourth-step/fourth-step.component';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";

@NgModule({
  declarations: [
    AppComponent,
    FirstStepComponent,
    SecondStepComponent,
    ScannerComponent,
    ThirdStepComponent,
    FourthStepComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ZXingScannerModule,
    NgxQRCodeModule,
    BarcodeScannerLivestreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
