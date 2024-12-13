
export interface User {
    _id:    string;
    nombre: string;
}

// Intrfaces de Usuarios
export interface Usuario {
    nombre:              string;
    tipo_documento:      string;
    cedula:              string;
    correo:              string;
    movil:               string;
    ciudad:              any;
    departamento:        any;
    admin:               any;
    club?:               [];
    rol?:                any;
    id?:                 string;
    _id?:                string;
    img?:                any;
    firma?:                any;
    asignacion_arbitro?: any;
    estado?:             boolean;
    createdAt?:          Date | string;
    updatedAt?:          Date;
    terminos?:           boolean;
    fecha_terminos?:     Date;
}


export interface UsuariosResp {
    ok:     boolean;
    total?: number;
    data:   Usuario[];
}


export interface UsuarioResp {
    ok:   boolean;
    data: Usuario;
}



export interface Deportista {
    nombre:         string;
    correo:         string;
    tipo_documento: string;
    cedula:         string;
    movil:          string;
    ciudad:         string;
    departamento:   string;
    rol:            string;
    club:           [];
    admin:          any;
    dias_pagos:     any;
    estado:         boolean;
    deportista:     DeportistaClass;
    createdAt:      Date;
    updatedAt:      Date;
    id:             string;
    img?:           string;
}

export interface DeportistaClass {
    _id:             string;
    user:            string;
    admin:           string;
    rama:            string;
    profesor:        [];
    patin:           string;
    fechaNacimiento: Date;
    peso:            number;
    talla:           number;
    informacion:     string;
    eps:             string;
    autorizacion:    boolean;
    mensualidad:     any;
    createdAt:       Date;
    updatedAt:       Date;
    __v:             number;
}


export interface FormDeportista {
    nombre:          string;
    cedula:          string;
    correo:          string;
    movil:           string;
    ciudad:          any;
    departamento:    any;
    rama:            string;
    patin:           string;
    fechaNacimiento: any;
    peso:            number | string;
    talla:           number | string;
    informacion:     string;
    eps:             string;
    profesor:        any;
    club?:           [];
    id?:             string;
    mensualidad?:    any;
    dias_pagos?:     any;
    rol?:            any;
    autorizacion?:   boolean;
    createdAt?:      Date;
    updatedAt?:      Date;
    img?:            any;
    estado?:         boolean;
}


export interface DeportistasResp {
    ok: boolean;
    total?: number;
    data: Deportista[];
}

export interface DeportistaResp {
    ok: boolean;
    data: Deportista;
}






// Interfaces de Clubes
export interface Club {
    nombre: string;
    correo: string;
    nit: string;
    movil: string;
    ciudad: any;
    departamento: any;
    descripcion: string;
    delegado: any;
    id?: string;
    entidad?: string;
    director?: any;
    img?: any;
    estado?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date;
}


export interface ClubesResp {
    ok: boolean;
    total?: number;
    data: Club[];
}

export interface ClubResp {
    ok: boolean;
    data: Club;
}





