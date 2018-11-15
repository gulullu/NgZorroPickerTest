import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule, PickerComponent, Picker } from 'ng-zorro-antd-mobile';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [PickerComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, OverlayModule,
  BrowserAnimationsModule, FormsModule, HttpClientModule, NgZorroAntdMobileModule],
  providers: [
    StatusBar,
    SplashScreen,
    Picker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
