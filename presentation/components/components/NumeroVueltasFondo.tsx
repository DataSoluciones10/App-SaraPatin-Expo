
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '../textos/ThemedText';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';



const adjustColor = (hex:string, percent:number) => {
    // Removing the # if present
    hex = hex.replace('#', '');
    // Convert to RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Adjust the color
    r = Math.min(255, Math.max(0, r + (r * percent / 100)));
    g = Math.min(255, Math.max(0, g + (g * percent / 100)));
    b = Math.min(255, Math.max(0, b + (b * percent / 100)));

    // Convert back to hex
    const newHex = '#' + 
        Math.round(r).toString(16).padStart(2, '0') +
        Math.round(g).toString(16).padStart(2, '0') +
        Math.round(b).toString(16).padStart(2, '0');

    return newHex;
};




export const NumeroVueltasFondo = ({ vuelta }:any) => {


    const { primary, disabledColor } = useThemeColors();
    const lighterColor = adjustColor(primary, 15);  
    const darkerColor = adjustColor(primary, -20); 



    return (

        <LinearGradient colors={[lighterColor, primary, darkerColor]} locations={[0, 0.5, 1]}
            style={styles.gradientContainer}  start={{ x: 0, y: 1 }}
        >
            <View style={styles.contenedor}>
                <ThemedText type="h3" style={[styles.labelText]}>
                    VUELTA
                </ThemedText>
                <View style={styles.numberContainer}>
                    <ThemedText type="h2" style={[styles.numberText]}>
                        {vuelta || 0}
                    </ThemedText>
                    <View style={[styles.decoration, {backgroundColor: disabledColor}]} />
                </View>
            </View>
        </LinearGradient>
    )
}




const styles = StyleSheet.create({
    gradientContainer: {
        borderRadius: 15,
        margin: 5,
    },

    contenedor: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    labelText: {
        fontSize: 16,
        letterSpacing: 2,
        textTransform: 'uppercase',
        color: '#ffffff',
        fontWeight: '600',
    },

    numberContainer: {
        alignItems: 'center',
        position: 'relative',
    },

    numberText: {
        fontSize: 40,
        fontWeight: 'bold',
        paddingTop: 12,
        color: '#ffffff',
    },

    decoration: {
        position: 'absolute',
        bottom: -7,
        width: '80%',
        height: 3,
        borderRadius: 2,
    }
});