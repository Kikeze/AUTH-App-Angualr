import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from 'src/app/guards/validar-token.guard';


const routes: Routes = [
    {
        path: "auth",
        loadChildren: () => import("src/app/auth/auth.module").then(m => m.AuthModule)
    },
    {
        path: "dashboard",
        loadChildren: () => import("src/app/protected/protected.module").then(m => m.ProtectedModule),
        canActivate: [ValidarTokenGuard],
        canLoad: [ValidarTokenGuard],
    },
    {
        path: "**",
        redirectTo: "auth"
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
