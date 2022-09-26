import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';


@Injectable({
    providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

    constructor(
        private AuthSvc: AuthService,
        private router: Router
    ) {
        // Do nothing
    }

    canActivate(): Observable<boolean> | boolean {
        return this.validacion();
    }

    canLoad(): Observable<boolean> | boolean {
        return this.validacion();
    }

    validacion(): Observable<boolean> | boolean {
        const token = localStorage.getItem("X-Token") || "";

        if( token.length >= 1 ) {
            return this.AuthSvc.validar()
                .pipe(
                    tap((v) => {
                        if( !v ) {
                            this.router.navigate(["/auth/login"]);
                        }
                    })
                );
        }
        else {
            this.router.navigate(["/auth/login"]);
            return of(false);
        }
    }

}
