import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthResponse } from 'src/app/auth/interfaces/auth.interfaces';
import { Usuario } from 'src/app/auth/interfaces/auth.interfaces';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl: string = environment.authURL;
    private _usuario!: Usuario;

    get usuario(): Usuario {
        return {...this._usuario};
    }

    constructor(
        private http: HttpClient
    ) {
        // Do nothing
    }

    ingresar(email: string, password: string): Observable<AuthResponse> {
        const body = {email, password};

        return this.http.post<AuthResponse>(`${this.apiUrl}/auth`, body)
            .pipe(
                tap((v) => {
                    if( v.data ) {
                        localStorage.setItem("X-Token", v.token!);
                        this._usuario = v.data;
                    }
                }),
                catchError((v) => {
                    return of(v.error);
                })
            );
    }

    registrar(nombre: string, email: string, password: string): Observable<AuthResponse> {
        const body = {nombre, email, password};

        return this.http.post<AuthResponse>(`${this.apiUrl}/auth/new`, body)
            .pipe(
                tap((v) => {
                    if( v.data ) {
                        localStorage.setItem("X-Token", v.token!);
                        this._usuario = v.data;
                    }
                }),
                catchError((v) => {
                    return of(v.error);
                })
            );
    }

    validar(): Observable<boolean> {
        const token = localStorage.getItem("X-Token") || "";
        const headers = new HttpHeaders()
            .set("x-wait", token)

        return this.http.get<AuthResponse>(`${this.apiUrl}/auth/renew`, { headers })
            .pipe(
                map((v) => {
                    if( v.data ) {
                        localStorage.setItem("X-Token", v.token!);
                        this._usuario = v.data;
                    }
                    return v.ok;
                }),
                catchError((v) => {
                    return of(false)
                })
            );
    }

    logout() {
        localStorage.clear();
    }

}
