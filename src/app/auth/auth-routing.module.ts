import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from 'src/app/auth/pages/login/login.component';
import { RegisterComponent } from 'src/app/auth/pages/register/register.component';
import { MainComponent } from 'src/app/auth/pages/main/main.component';


const routes: Routes = [
    {
        path: "",
        component: MainComponent,
        children: [
            {path: "login", component: LoginComponent},
            {path: "register", component: RegisterComponent},
            {path: "**", redirectTo: "login"}
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
