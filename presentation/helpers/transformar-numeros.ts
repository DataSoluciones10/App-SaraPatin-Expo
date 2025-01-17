


export const removerComas = (value: string | null) => {
    if( !value || value === '' ) return '';
    return value.replace(/[.,]/g, '');
};




export const separadorMillares = (numero: any) => {
    if (typeof numero !== 'number' || !isFinite(numero)) {
        return '000000'; 
    }
    return numero.toLocaleString('es-CO');  
};

