import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuModule } from 'primeng/menu';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [DashboardComponent]
})
export class DashboardModule { }
