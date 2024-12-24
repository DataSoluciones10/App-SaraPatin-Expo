



export const removerComas = (value: string | null) => {
    if( !value || value === '' ) return '';
    return value.replace(/[.,]/g, '');
};