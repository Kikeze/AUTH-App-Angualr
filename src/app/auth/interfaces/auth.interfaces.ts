

export interface AuthResponse {
    ok: boolean;
    msg: string;
    data?: Usuario;
    token?: string;
    errors?: any;
}

export interface Usuario {
    id: string;
    nombre: string;
    email: string;
}

