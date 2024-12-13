
import { useNavigation } from "@react-navigation/native";
import { View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from '@expo/vector-icons';
import useThemeColors from "../hooks/global/useThemeColors";
import { ThemedText } from "../components";




interface Props {
    title: string;
    subtitle?: string;
    rightAction?: () => void;
    rightActionIcon?: keyof typeof Ionicons.glyphMap;
    children: React.ReactNode;
};




export const DisenioPagina = ({ title, subtitle, rightAction, rightActionIcon, children }: Props) => {


    const { goBack, canGoBack } = useNavigation();
    const { text, background } = useThemeColors();


    const renderBackAction = () => (
        <Pressable onPress={goBack} className="p-1">
            <Ionicons name='chevron-back-outline' size={24} color={text} /> 
        </Pressable>
    );


    const renderRightAction = () => {
        if (!rightAction || !rightActionIcon) return null;
        return (
            <Pressable onPress={rightAction} className="p-2">
                <Ionicons name={rightActionIcon} size={24} color="white" /> 
            </Pressable>
        );
    };


    return (
        <SafeAreaView style={{ flex:1, backgroundColor:background }}>
            <View className="flex-row items-center justify-between px-4 py-3" 
                style={{backgroundColor:background, borderBottomWidth:0.2, borderBottomColor:'gray', paddingBottom:subtitle ? 10 : 15}}
            >
                {/* Left Action */}
                {canGoBack() ? renderBackAction() : <View className="w-8" />}

                {/* Title & Subtitle */}
                <View className="flex-1 items-center">
                    <ThemedText type='h2' bold>{title}</ThemedText>
                    {(subtitle) &&( <ThemedText style={{marginTop:-3}} type='normal'>{subtitle}</ThemedText>) }
                </View>

                {/* Right Action */}
                {renderRightAction() || <View className="w-8" />}
            </View>


            {/* Content */}
            <View className="flex-1" style={{backgroundColor:background}}>
                {children}
            </View>

        </SafeAreaView>
    );

};
