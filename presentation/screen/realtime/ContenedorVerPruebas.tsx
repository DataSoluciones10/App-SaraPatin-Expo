

import { VerPruebaFondoPuntos } from './VerPruebaFondoPuntos';
import { VerPruebasClasificatorias } from './VerPruebasClasificatorias';
import { VerPruebasFestivales } from './VerPruebasFestivales';
import { VerPruebasXGrupos } from './VerPruebasXGrupos';
import { VerPruebasXTiempo } from './VerPruebasXTiempo';





interface Props {
    datos: any;
}





export const ContenedorVerPruebas = ({ datos }:Props) => {


    if(datos.competencia?.tipo_competencia === 'FESTIVAL') {
        return <VerPruebasFestivales />
    }


    if(datos.competencia.tipo_competencia === 'LIGA') {
        if(datos.clasificatoria) {
            return <VerPruebasClasificatorias />
        }

        if(datos.prueba_activa === 'VELOCIDAD OLIMPICA') {
          return <VerPruebasXGrupos />
        }

        if(datos.prueba_activa === 'FONDO PUNTOS') {
            return <VerPruebaFondoPuntos />
        }

        if(datos.prueba_activa !== 'FONDO PUNTOS') {
            return <VerPruebasXTiempo />
        }
    }


    //   return <TituloCentradoScreen titulo="Cambiar Tipo de Competencia..." />

    
}




