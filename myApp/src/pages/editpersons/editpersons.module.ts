import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditpersonsPage } from './editpersons';

@NgModule({
  declarations: [
    EditpersonsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditpersonsPage),
  ],
})
export class EditpersonsPageModule {}
