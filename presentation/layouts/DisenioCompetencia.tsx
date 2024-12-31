
import { useNavigation } from "@react-navigation/native";
import { View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

import { Ionicons } from '@expo/vector-icons';
import useThemeColors from "../hooks/global/useThemeColors";
import { ThemedText } from "../components";
import { useCategoriaTemporadaXId } from "../hooks";




interface Props {
    title: string;
    subtitle?: string;
    rightAction?: () => void;
    rightActionIcon?: keyof typeof Ionicons.glyphMap;
    children: React.ReactNode;
};




export const DisenioCompetencia = ({ title, subtitle, children }: Props) => {


    const { id } = useLocalSearchParams();
    const { goBack, canGoBack } = useNavigation();
    const { text, disabledColor, background } = useThemeColors();
    const { categoriaTemporadaQueryId } = useCategoriaTemporadaXId(`${id}`);
    const competencia = categoriaTemporadaQueryId?.data?.competencia.nombre; 
    const fase = categoriaTemporadaQueryId?.data?.temporada.nombre; 
    const patin = categoriaTemporadaQueryId?.data?.titulo; 

    


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
                    <ThemedText style={{marginTop:-3, fontSize:13, color:disabledColor}} type='normal'>{competencia}</ThemedText>
                    <ThemedText style={{marginTop:-3, fontSize:13, color:disabledColor}} type='normal'>
                        {`${fase} - ${patin}`}
                    </ThemedText>
                </View>
            </View>


            {/* Content */}
            <View style={{backgroundColor:background, flex:1}}>
                {children}
            </View>


            <View className="w-8" />
        </SafeAreaView>
    );

};
