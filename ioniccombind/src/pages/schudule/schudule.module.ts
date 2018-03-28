import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchudulePage } from './schudule';

@NgModule({
  declarations: [
    SchudulePage,
  ],
  imports: [
    IonicPageModule.forChild(SchudulePage),
  ],
})
export class SchudulePageModule {}
