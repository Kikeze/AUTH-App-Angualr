import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    mainForm: FormGroup = this.builder.group({
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]]
    });

    constructor(
        private builder: FormBuilder
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    ingresar() {
        console.log(this.mainForm.valid);
        console.log(this.mainForm.value);
    }

}
