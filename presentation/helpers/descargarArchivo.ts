
import { Alert } from 'react-native';


export const descargarPDF = (data:any, nombreArchivo:string='error') => {
    const blob = new Blob([data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = nombreArchivo; 
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}


// export const descargarPDF = async (data: any, nombreArchivo: string = 'documento.pdf') => {
//     try {
//         // Extraer información del archivo
//         const { blobId, size } = data._data;

//         // Ruta donde se guardará el archivo
//         const filePath = `${RNFS.DownloadDirectoryPath}/${nombreArchivo}`; // Directorio de Descargas (Android)

//         // Leer el archivo desde el blobId (usualmente requerido para sistemas base React Native)
//         const fileContent = await RNFS.readFile(blobId, 'base64');

//         // Guardar el archivo en la ruta
//         await RNFS.writeFile(filePath, fileContent, 'base64');

//         // Notificar al usuario
//         Alert.alert('Descarga completada', `El archivo se guardó en: ${filePath}`);
//     } catch (error) {
//         Alert.alert('Error', 'No se pudo descargar el archivo.');
//         console.error(error);
//     }
// };










export const descargarArchivoExcel = (data:any, nombre:string='error') => {
    const uint8Array = new Uint8Array(data);
    const blob = new Blob([uint8Array], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = `${nombre}.xlsx`
    link.click()
}






export const descargarArchivo = (data:any, nombre:string='error') => {
    const uint8Array = new Uint8Array(data);
    const blob = new Blob([uint8Array], {type: 'application/pdf'})
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = `${nombre}`
    link.click()
}





    
// Transformar url a base64
export const urlToBase64 = async (url:any) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
    });
};








export const descargarImagenXUrl = async (url:string, nombre:string) => {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = nombre;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error al descargar la imagen:', error);
    }
};