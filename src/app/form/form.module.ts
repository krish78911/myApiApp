import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- import here
import { IonicModule } from '@ionic/angular';

import { FormPageRoutingModule } from './form-routing.module';

import { FormPage } from './form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPageRoutingModule,
    ReactiveFormsModule,  // <-- add ReactiveFormsModule here
  ],
  declarations: [FormPage]
})
export class FormPageModule {}
