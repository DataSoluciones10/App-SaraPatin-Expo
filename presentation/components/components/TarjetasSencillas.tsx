
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';




interface Props {
    titulo: string; 
    url: string; 
    icon: any;
    onClickHandler: any; 
    subtitulo?: string | undefined;
}





export const TarjetasSencillas = ({ onClickHandler, icon, titulo, subtitulo }: Props) => {


    const { primary, background } = useThemeColors();



    return (

        <View style={{ backgroundColor:background, borderRadius:14, overflow:'hidden', flex:1 / 2,
            borderWidth:1,  margin:7 }} className={`${background === 'light' ? 'border-gray-300' : 'border-gray-700'}`}>
            <TouchableOpacity onPress={() => onClickHandler() } 
                style={{ flex:1, justifyContent:'center', alignItems:'center', paddingVertical:16, paddingHorizontal:3,
            }}>
                <Ionicons name={icon} size={40} color={primary} className="mb-2" />
                <ThemedText type='semi-bold' style={{fontSize:14}}>{ titulo }</ThemedText>
                {subtitulo && (<ThemedText type='semi-bold' style={{fontSize:9}}>{ subtitulo }</ThemedText>)} 
            </TouchableOpacity>
        </View>


    )
}

