
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: AboutPage}]),
    ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
