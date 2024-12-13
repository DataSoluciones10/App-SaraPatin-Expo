

import { View, ActivityIndicator } from 'react-native';
import { ThemedText } from '../textos/ThemedText';



interface Props {
    titulo: string;
}



export const CargandoScreen = ({ titulo }: Props) => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', marginBottom:5, flexDirection:'column'}}>
            <ActivityIndicator size={40} />
            <ThemedText type='semi-bold' bold>{ titulo }</ThemedText>
        </View>
    )
}