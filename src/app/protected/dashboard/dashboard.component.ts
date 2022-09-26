import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';
import { Usuario } from 'src/app/auth/interfaces/auth.interfaces';


@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    usuario: Usuario = this.AuthSvc.usuario;

    constructor(
        private router: Router,
        private AuthSvc: AuthService
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    salir() {
        this.AuthSvc.logout();
        this.router.navigate(["/auth/login"]);
    }

}
