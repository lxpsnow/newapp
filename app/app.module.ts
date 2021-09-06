import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { CookieService } from 'ngx-cookie-service';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { ImageViewerModule } from "ngx-image-viewer";
import { HammerModule} from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [HammerModule,ImageViewerModule.forRoot(),BrowserModule,HttpClientModule, IonicModule.forRoot(), AppRoutingModule,NgxIonicImageViewerModule],
  providers: [PhotoLibrary,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},PhotoViewer,CookieService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
