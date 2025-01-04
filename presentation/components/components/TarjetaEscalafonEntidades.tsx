
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Animated, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';

const url = process.env.EXPO_PUBLIC_API_URL_DESARROLLO;

interface Props {
    datos: any;
    index: number;
    isClub?: boolean;
}

export const TarjetaEscalafonEntidades = ({ datos, isClub=false, index }: Props) => {


    const { primary, secondary, opaco, background, disabledColor } = useThemeColors();
    const [expanded, setExpanded] = useState(false);
    const animatedHeight = useState(new Animated.Value(0))[0];


    const toggleExpand = () => {
        setExpanded(!expanded);
        Animated.timing(animatedHeight, {
            toValue: expanded ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };




    return (
        <Animated.View style={[styles.card, {backgroundColor:isClub ? secondary : background, borderColor:opaco}]}>
            <TouchableOpacity style={{flex:1}} onPress={toggleExpand}>
                <View style={styles.mainContent}>
                    <View style={styles.rankAndImageContainer}>
                        <View style={[styles.rankBadge, { backgroundColor: primary }]}>
                            <ThemedText style={styles.rankText}>#{index}</ThemedText>
                        </View>
                        <Image 
                            resizeMode="cover" 
                            source={datos.img 
                                ? { uri: `${url}/uploads/entidad/${datos.img}` } 
                                : require('../../../assets/images/user/no-img.webp')
                            }
                            style={[styles.avatar, { borderColor: primary }]}
                        />
                    </View>

                    <View style={styles.infoContainer}>

                        <ThemedText style={styles.name} numberOfLines={2}>
                            {datos.club}
                        </ThemedText>

                        <View style={styles.statsContainer}>
                            <View style={[styles.statItem, styles.statItemGold]}>
                                <Ionicons name="trophy" size={18} color="#FFD700" />
                                <ThemedText style={[styles.statText]}>{datos.oro || 0}</ThemedText>
                            </View>
                            <View style={[styles.statItem, styles.statItemSilver]}>
                                <Ionicons name="trophy" size={18} color="#A9A9A9" />
                                <ThemedText style={[styles.statText]}>{datos.plata || 0}</ThemedText>
                            </View>
                            <View style={[styles.statItem, styles.statItemBronze]}>
                                <Ionicons name="trophy" size={18} color="#CD7F32" />
                                <ThemedText style={[styles.statText]}>{datos.bronce || 0}</ThemedText>
                            </View>
                            <View style={[styles.statItem, styles.statItemAthletes]}>
                                <Ionicons name="people-circle-outline" size={20} color={primary} />
                                <ThemedText style={[styles.statText]}>{datos.deportistas || 0}</ThemedText>
                            </View>
                        </View>
                    </View>

                </View>


                <Animated.View style={{overflow:'hidden', maxHeight: animatedHeight.interpolate({inputRange: [0, 1], outputRange: [0, 500]})}}>
                    {datos.pruebas?.map((prueba: any) => (
                        <View key={prueba.nombre} style={[styles.pruebaContainer, {borderColor:disabledColor}]}>

                            <ThemedText style={styles.pruebaName}>{prueba.nombre}</ThemedText>

                            <View style={styles.pruebaScores}>
                                <View style={[styles.scoreItem, styles.statItemGold]}>
                                    <Ionicons name="trophy" size={20} color="#FFD700" />
                                    <ThemedText style={styles.scoreText}>{prueba.oro || 0}</ThemedText>
                                </View>
                                <View style={[styles.scoreItem, styles.statItemSilver]}>
                                    <Ionicons name="trophy" size={20} color="#A9A9A9" />
                                    <ThemedText style={styles.scoreText}>{prueba.plata || 0}</ThemedText>
                                </View>
                                <View style={[styles.scoreItem, styles.statItemBronze]}>
                                    <Ionicons name="trophy" size={20} color="#CD7F32" />
                                    <ThemedText style={styles.scoreText}>{prueba.bronce || 0}</ThemedText>
                                </View>
                                <View style={[styles.scoreItem, styles.statItemAthletes]}>
                                    <Ionicons name="people-circle-outline" size={20} color={primary} />
                                    <ThemedText style={[styles.scoreText]}>{prueba.deportistas || 0}</ThemedText>
                                </View>
                            </View>

                        </View>
                    ))}
                </Animated.View>
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 14,
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        overflow: 'hidden',
    },

    mainContent: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },

    rankAndImageContainer: {
        position: 'relative',
        marginRight: 12,
    },

    rankBadge: {
        position: 'absolute',
        top: -5,
        left: -5,
        zIndex: 1,
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },

    rankText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 10,
        borderWidth: 2,
    },

    infoContainer: {
        flex: 1,
        paddingHorizontal: 5,
    },
    name: {
        fontSize: 14,
        fontWeight: '800',
        marginBottom: 8,
        textAlign:'center'
    },

    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 8,
    },

    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
        borderRadius: 6,
        gap: 3,
    },

    statItemGold: {
        backgroundColor: '#FFF7E6',
    },

    statItemSilver: {
        backgroundColor: '#F5F5F5',
    },
    
    statItemBronze: {
        backgroundColor: '#FFF1E6',
    },

    statItemAthletes: {
        backgroundColor: '#E6F7FF',
    },

    statText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'black',
    },

    pruebaContainer: {
      borderTopWidth: 1,
      padding: 12,
    },

    pruebaName: {
      fontSize: 16,
      fontWeight: '700',
      marginBottom: 8,
    },

    pruebaScores: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      gap: 8,
    },

    scoreItem: {
      flex: 1,
      padding: 8,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 3,
    },

    scoreText: {
      fontSize: 14,
      fontWeight: '600',
      color: 'black',
    },
});