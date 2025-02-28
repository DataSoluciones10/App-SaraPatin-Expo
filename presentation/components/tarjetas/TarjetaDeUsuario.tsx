
import { router } from 'expo-router';
import { View, TouchableOpacity, Image } from 'react-native';

import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';
import { categoriaDeportista } from '@/presentation/helpers';

const url = process.env.EXPO_PUBLIC_API_URL_DESARROLLO;



interface Props {
    nombre: string;
    datos: string;
    fecha: Date;
    uid: any;
    carpeta: string;
    img?: string;
}




export const TarjetaDeUsuario = ({ nombre, img, datos, fecha, uid, carpeta }: Props) => {
    

    const { opaco, background } = useThemeColors();


    return (

        <View style={{ backgroundColor:background, borderRadius:14, overflow:'hidden', 
            borderBottomWidth:1, borderBottomColor:opaco }}
        >
            <TouchableOpacity className="flex-row items-center rounded-lg p-2"
                onPress={() => router.push({ pathname: '/deportistas/[id]', params:{id: uid} })}
            >
                <Image 
                    source={img ? { uri: `${url}/uploads/${carpeta}/${img}` } : require('../../../assets/images/user/no-img.webp')}
                    className="w-16 h-16 rounded-full mr-3"
                    resizeMode="cover"
                />

                <View className="flex-1">
                    <ThemedText type='semi-bold' numberOfLines={1} style={{fontSize:16}}>{ nombre }</ThemedText>
                    <ThemedText type='semi-bold' numberOfLines={1} style={{fontSize:12, color:'gray'}}>{ datos }</ThemedText>
                    <ThemedText type='semi-bold' numberOfLines={1} style={{fontSize:12, color:'gray'}}>
                        { categoriaDeportista(fecha) } años
                    </ThemedText>
                </View>
            </TouchableOpacity>
        </View>
    )
}
