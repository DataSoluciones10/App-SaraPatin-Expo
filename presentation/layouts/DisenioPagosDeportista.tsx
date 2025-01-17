
import { useNavigation } from "@react-navigation/native";
import { View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

import { Ionicons } from '@expo/vector-icons';
import useThemeColors from "../hooks/global/useThemeColors";
import { ThemedText } from "../components";
import { useFacturaDeportistaXId } from "../hooks";
import dayjs from "dayjs";
import { separadorMillares } from "../helpers";




interface Props {
    title: string;
    subtitle?: string;
    rightAction?: () => void;
    rightActionIcon?: keyof typeof Ionicons.glyphMap;
    children: React.ReactNode;
};




export const DisenioPagosDeportista = ({ title, subtitle, children }: Props) => {


    const { id } = useLocalSearchParams();
    const { goBack, canGoBack } = useNavigation();
    const { text, disabledColor, background } = useThemeColors();
    const { facturaDeportistaQueryId } = useFacturaDeportistaXId(`${id}`);

    const deportista = facturaDeportistaQueryId?.data?.deportista.nombre; 
    const fecha = dayjs(facturaDeportistaQueryId?.data?.mes_pago).format('MMMM-YYYY').toUpperCase(); 
    const valor = `$${separadorMillares(facturaDeportistaQueryId?.data?.valor)}`; 

    

    const renderBackAction = () => (
        <Pressable onPress={goBack} className="p-1">
            <Ionicons name='chevron-back-outline' size={24} color={text} /> 
        </Pressable>
    );




    return (
        
        <SafeAreaView style={{ flex:1, backgroundColor:background }}>
            <View className="flex-row items-center justify-between px-4 py-3" 
                style={{backgroundColor:background, borderBottomWidth:0.2, borderBottomColor:'gray', paddingBottom:subtitle ? 10 : 15}}
            >
                {/* Left Action */}
                {canGoBack() ? renderBackAction() : <View className="w-8" />}

                {/* Title & Subtitle */}
                <View className="flex-1 items-center">
                    <ThemedText type='h2' bold style={{textAlign:'center'}}>
                        {title}
                    </ThemedText>
                    <ThemedText style={{marginTop:-3, fontSize:13, color:disabledColor}} type='normal'>{ deportista }</ThemedText>
                    <ThemedText style={{marginTop:-3, fontSize:13, color:disabledColor}} type='normal'>
                        {`${fecha} - ${valor}`}
                    </ThemedText>
                </View>

                <View className="w-8" />
            </View>


            {/* Content */}
            <View style={{backgroundColor:background, flex:1}}>
                {children}
            </View>

            <View className="w-8" />
        </SafeAreaView>
    );

};
