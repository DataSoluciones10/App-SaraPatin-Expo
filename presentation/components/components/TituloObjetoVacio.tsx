
import { StyleSheet } from "react-native";
import { ThemedView } from "../textos/ThemedView";
import { ThemedText } from "../textos/ThemedText";
import useThemeColors from "@/presentation/hooks/global/useThemeColors";



interface Props {
    titulo: string;
    style?: any;
}





export const TituloObjetoVacio = ({ titulo, style }:Props) => {


    const { opaco } = useThemeColors();


    return (

        <ThemedView style={[styles.container, style]}>
            <ThemedText type="h3" style={{color:opaco, fontWeight:'bold', textAlign:'center'}}>{ titulo }</ThemedText>
        </ThemedView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
});