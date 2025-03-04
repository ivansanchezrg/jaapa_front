import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CobrosComponent } from './components/cobros/cobros.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CobrosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
