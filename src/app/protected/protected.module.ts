import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from 'src/app/protected/protected-routing.module';
import { DashboardComponent } from 'src/app/protected/dashboard/dashboard.component';


@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        ProtectedRoutingModule,
    ]
})
export class ProtectedModule { }
