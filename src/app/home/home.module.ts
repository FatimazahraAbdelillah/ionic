
import { RouterModule } from '@angular/router';


import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IonicModule } from '../../../node_modules/@ionic/angular';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
