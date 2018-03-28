import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{SchudulePage}from '../pages/schudule/schudule';
import{PortfolioPage} from '../pages/portfolio/portfolio';
import{PaymentPage} from'../pages/payment/payment';
import{SettingPage} from '../pages/setting/setting';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Tabs menu
import { TabsPage } from '../pages/tabs/tabs';
import { CoursePage } from '../pages/course/course';
import { ArticlePage } from '../pages/article/article';
import { ContactPage } from '../pages/contact/contact';
import { ServicePage } from '../pages/service/service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SchudulePage,
    PortfolioPage,
    PaymentPage,
    SettingPage,
    TabsPage,
    CoursePage,
    ServicePage,
    ArticlePage,
    ContactPage
      ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SchudulePage,
    PortfolioPage,
    PaymentPage,
    SettingPage,
    TabsPage,
    CoursePage,
    ServicePage,
    ArticlePage,
    ContactPage
      ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
