
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ContactPage } from './contact.page';
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ContactPage }])
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
