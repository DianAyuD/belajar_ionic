import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TobiPageRoutingModule } from './tobi-routing.module';

import { TobiPage } from './tobi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TobiPageRoutingModule
  ],
  declarations: [TobiPage]
})
export class TobiPageModule {}
