import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import{SchudulePage}from '../pages/schudule/schudule';
import{PortfolioPage} from '../pages/portfolio/portfolio';
import{PaymentPage} from'../pages/payment/payment';
import{SettingPage} from '../pages/setting/setting';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
    //  { title: 'Home', component: HomePage,icon:'ios-home' },
      { title: 'Schudule', component: SchudulePage,icon:'md-calendar' },
      { title: 'Portfolio', component:PortfolioPage,icon:'md-filing' },
      { title: 'Payment', component: PaymentPage,icon:'logo-bitcoin' },
      { title: 'Setting', component: SettingPage,icon:'md-settings' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
