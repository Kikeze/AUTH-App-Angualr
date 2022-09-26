import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

    mainForm: FormGroup = this.builder.group({
        nombre: ["Prueba 1", [Validators.required]],
        email: ["prueba1@correo.com", [Validators.required, Validators.email]],
        password: ["123456", [Validators.required, Validators.minLength(6)]]
    });

    constructor(
        private builder: FormBuilder,
        private router: Router,
        private AuthSvc: AuthService
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    registrar() {
        const {nombre, email, password} = this.mainForm.value;

        this.AuthSvc.registrar(nombre, email, password)
            .subscribe({
                next: (v) => {
                    if( v.ok ) {
                        this.router.navigate(["/dashboard"]);
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: v.msg
                        });
                    }
                },
                complete: () => {
                    console.log("--> Termina registro de usuario");
                }
            });

    }

}
