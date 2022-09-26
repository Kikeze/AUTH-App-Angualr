import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

    mainForm: FormGroup = this.builder.group({
        nombre: ["", [Validators.required]],
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

    registrar() {
        console.log(this.mainForm.valid);
        console.log(this.mainForm.value);
    }

}
