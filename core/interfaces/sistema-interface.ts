

/* ***Roles*** */
export interface Roles {
    nombre: string;
    name?: string;
    id?: string;
    estado?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date;
}


export interface RolesResp {
    data: Roles;
    ok: boolean;
}



/* ***Ciudades*** */
export interface Ciudad {
    name: string;
    name_in_capital_letters: string;
    code: string;
    region: number;
    depart: string;
    _id?: string;
    id?: number;
    created_at?: Date;
    updated_at?: Date;
    status?: boolean;
}


export interface CiudadesResp {
    data: Ciudad[];
    ok: boolean;
}



/* ***Regiones*** */
export interface Region {
    name: string;
    country: number;
    region: number;
    id?: string;
    created_at?: Date;
    updated_at?: Date;
    status?: boolean;
}


export interface RegionesResp {
    data: Region[];
    ok: boolean;
}

