import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';
import { RegisterComponent } from 'src/app/auth/pages/register/register.component';
import { MainComponent } from 'src/app/auth/pages/main/main.component';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        MainComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule,
    ]
})
export class AuthModule { }
