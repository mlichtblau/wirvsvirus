import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RestService} from './shared/api/rest.service';
import {AppointmentProvider} from './shared/api/appointment/appointment';
import {HttpClientModule} from '@angular/common/http';
import {ContactDatumProvider} from './shared/api/contact-datum/contact-datum';
import {CoordinateProvider} from './shared/api/coordinate/coordinate';
import {TestcenterProvider} from './shared/api/testcenter/testcenter';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      RestService,
      AppointmentProvider,
      ContactDatumProvider,
      CoordinateProvider,
      TestcenterProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
