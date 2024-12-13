


export interface Competencia {
    nombre: string;
    nit: string;
    correo: string;
    movil: string;
    departamento: any;
    ciudad: any;
    representante?: any;
    id?: string;
    tipo_competencia?: string;
    img?: any;
    imgpdf?: any;
    estado?: boolean;
    telefono?: string;
    createdAt?: Date;
    updatedAt?: Date;
}


export interface CompetenciasResp {
    data: Competencia[];
    ok: boolean;
    total?: number;
}



export interface CompetenciaResp {
    data: Competencia;
    ok: boolean;
}