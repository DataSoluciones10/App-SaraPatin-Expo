
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { ThemedView } from "../textos/ThemedView";
import { ThemedText } from "../textos/ThemedText";
import useThemeColors from "@/presentation/hooks/global/useThemeColors";



interface Props {
    titulo: string;
}





export const MensajeListaVacia = ({ titulo }:Props) => {


    const { opaco } = useThemeColors();


    return (

        <ThemedView style={styles.container}>
            <View>
                <Ionicons name="file-tray-full-outline" size={50} color={opaco} />
            </View>
            
            <ThemedText type="h3" style={{color:opaco, fontWeight:'bold', textAlign:'center'}}>{ titulo }</ThemedText>
        </ThemedView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:10
    },
});