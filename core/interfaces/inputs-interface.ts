


export interface SelectProps {
    label: string;
    placeholder: string;
    type: string;
    name: string;
    fullWidth: any;
    options?: any[]; 
    size?: any;
    disabled?: boolean;
    value?: string | number;
}




export interface TextFieldProps {
    name: string;
    label: string; 
    type: string;
    placeholder: string; 
    fullWidth: any;
    disabled?: boolean;
    InputProps?: any;
    multiline?: any;
    size?: any;
    rows?: any;
    signo?: string | null;
    icono?: string | null;
    start?: boolean;
    end?: boolean;
    autoComplete?: string;
}



export interface AutocompleteProps {
    label: string;
    name: string;
    placeholder: string;
    fullWidth: any;
    options?: any[]; 
    disabled?: boolean;
    bloqueo?: boolean;
    size?: any;
    value?: string | number;
    handleFunction?: any;
}


export interface DateProps {
    label: string;
    placeholder: string;
    name: string;
    bloqueo?: boolean
    value?: string | number | any;
    size?: any;

}