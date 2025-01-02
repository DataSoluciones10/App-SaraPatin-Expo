
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';

import useThemeColors from "@/presentation/hooks/global/useThemeColors";
import { useCategoriaTemporadaXId } from "@/presentation/hooks";
import { ThemedText } from "../components";


const BANNER_HEIGHT = 150;




export const BannerDeCompetencia = ({ children }:any) => {


    const { id } = useLocalSearchParams();
    const { goBack, canGoBack } = useNavigation();
    const { text, opaco, background, primary, disabledColor } = useThemeColors();
    const { categoriaTemporadaQueryId } = useCategoriaTemporadaXId(`${id}`);
    const isDarkMode = background !== '#FFFFFF';


    const categoria = categoriaTemporadaQueryId?.data;
    const competencia = (categoria) ? `${categoria.competencia?.nombre}` : 'No hay datos de competencia';
    const rama = (categoria && categoria.rama_activa === 'VARON') ? 'VARONES' :
                (categoria && categoria.rama_activa === 'DAMA') ? 'DAMAS' : null;
    
    const categorias = (categoria && categoria.categoria_activa)
    ? (isNaN(categoria.categoria_activa)
        ? `${categoria.categoria_activa.toUpperCase()}` 
        : `${categoria.categoria_activa} AÑOS`)
    : 'NO ASIGNADA';

    const pruebas = (categoria && categoria.prueba_activa) ? `${categoria.prueba_activa}` : 'PRUEBA NO ASIGNADA';


    // {backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : opaco }

    const renderHeader = () => (
        <View style={styles.headerContainer}>
            {canGoBack() && (
                <Pressable  onPress={goBack} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    style={[styles.backButton, {backgroundColor: opaco }]}
                >
                    <Ionicons name='chevron-back-outline' size={24} color={text} />
                </Pressable>
            )}
        </View>
    );



    return (
        <SafeAreaView style={{ backgroundColor:background, flex:1 }}>

            <LinearGradient colors={isDarkMode ? ['#1a1a1a', '#2d2d2d'] : ['#ffffff', '#f8f8f8']}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.banner}
            >
                {renderHeader()}

                <BlurView intensity={isDarkMode ? 30 : 50} tint={isDarkMode ? 'dark' : 'light'} style={styles.blurContainer}>
                    <View style={styles.decorativeLines}>
                        <View style={[styles.line, { backgroundColor: primary, opacity: 0.1 }]} />
                        <View style={[styles.line, { backgroundColor: primary, opacity: 0.05 }]} />
                    </View>

                    <View style={styles.contentContainer}>
                        {(rama) &&
                        <View style={[styles.categoryBadge, { backgroundColor: primary }]}>
                            <LinearGradient colors={['rgba(255,255,255,0.2)', 'transparent']} style={styles.badgeGradient}>
                                <ThemedText type="semi-bold" style={styles.badgeText}>
                                    {`${rama} - ${categorias}`}
                                </ThemedText>
                            </LinearGradient>
                        </View>
                        }
                        
                        <ThemedText type="h2" style={styles.title}>
                            { pruebas }
                        </ThemedText>

                        <View style={styles.dividerContainer}>
                            <View style={[styles.divider, {backgroundColor:opaco}]} />
                            <View style={[styles.dividerDot, { backgroundColor: primary }]} />
                            <View style={[styles.divider, {backgroundColor:opaco}]} />
                        </View>

                        <ThemedText type="semi-bold" style={[styles.competitionText, {color:disabledColor}]}>
                            { competencia }
                        </ThemedText>
                    </View>
                </BlurView>

            </LinearGradient>

            <View style={{backgroundColor:background, flex:1}}>
                {children}
            </View>
        </SafeAreaView>
    );
};




const styles = StyleSheet.create({
    banner: {
        minHeight: BANNER_HEIGHT,
        width: '100%',
    },
    
    blurContainer: {
        flex: 1,
        overflow: 'hidden',
    },

    headerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        zIndex: 10,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },

    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },

    decorativeLines: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    line: {
        position: 'absolute',
        height: BANNER_HEIGHT * 2,
        width: 120,
        transform: [{ rotate: '45deg' }],
    },

    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },

    categoryBadge: {
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 10,
    },

    badgeGradient: {
        paddingHorizontal: 15,
        paddingVertical: 5,
    },

    badgeText: {
        color: 'white',
        fontSize: 12,
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        textAlign: 'center',
    },

    title: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10,
        letterSpacing: 0.7,
        paddingTop: 6,
        fontWeight: 800,
    },

    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        width: '60%',
    },
    
    divider: {
        flex: 1,
        height: 1,
    },
    
    dividerDot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        marginHorizontal: 8,
    },

    competitionText: {
        fontSize: 13,
        textAlign: 'center',
        letterSpacing: 0.5,
        paddingTop: 4,
    },
});