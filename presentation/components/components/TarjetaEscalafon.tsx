
import { useState, useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Animated, StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';


const url = process.env.EXPO_PUBLIC_API_URL_DESARROLLO;


interface Props {
    datos: any;
    index: number;
    isDeportista?: boolean;
}



export const TarjetaEscalafon = ({ datos, isDeportista=false, index }: Props) => {


    const { secondary, opaco, background, primary, disabledColor } = useThemeColors();
    const [expanded, setExpanded] = useState(false);
    const animatedHeight = useState(new Animated.Value(0))[0];


    const toggleExpand = useCallback(() => {
        setExpanded((prev) => !prev);
        Animated.timing(animatedHeight, {
            toValue: expanded ? 0 : 1,        
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [expanded, animatedHeight]);



    return (
        <Animated.View style={[{ backgroundColor: isDeportista ? secondary : background, borderColor: opaco}, styles.card ]}>
            <TouchableOpacity onPress={toggleExpand} style={{ borderColor:opaco }}>

                <View style={styles.mainContent}>
                    <View style={styles.rankAndImageContainer}>
                        <Image resizeMode="cover"
                            source={datos.img 
                              ? { uri: `${url}/uploads/entidad/${datos.img}` } 
                              : require('../../../assets/images/user/no-img.webp')
                            }
                            style={[styles.avatar, { borderColor: primary }]}
                        />
                    </View>

                  <View style={styles.infoContainer}>
                      <ThemedText style={styles.name} numberOfLines={2}>
                        {datos.nombre}
                      </ThemedText>
                      <ThemedText style={[styles.detailText, {color: disabledColor}]}>
                          {datos.entidad}
                      </ThemedText>

                      <View style={styles.statsContainer}>
                          <View style={[styles.statItem]}>
                              <Ionicons name="flag" size={16} color={ primary } />
                              <ThemedText style={[styles.statText]}>{ index }</ThemedText>
                          </View>
                          <View style={[styles.statItem]}>
                              <Ionicons name="star" size={16} color={ primary } />
                              <ThemedText style={[styles.statText]}>{ datos.total } pts</ThemedText>
                          </View>
                          <View style={[styles.statItem]}>
                              <Ionicons name="clipboard" size={16} color={ primary } />
                              <ThemedText style={[styles.statText]}>{datos.numero.numero_competencia}</ThemedText>
                          </View>
                      </View>
                  </View>
                </View>

                <Animated.View style={{overflow:'hidden', 
                    maxHeight: animatedHeight.interpolate({inputRange: [0, 1],outputRange: [0, 500]})
                }}>

                    {datos.pruebas?.map((prueba: any, index: number) => (
                        <View key={prueba.nombre} style={[styles.pruebaContainer, {borderColor:secondary}]}>

                            <View style={styles.pruebaHeader}>
                                <View style={styles.headerLeft}>
                                    <Ionicons name="trophy-outline" size={20} color={primary} style={styles.pruebaIcon}/>
                                    <ThemedText style={styles.pruebaNombre}>
                                        { prueba.nombre }
                                    </ThemedText>
                                </View>
                                <View style={[styles.statusBadge, { backgroundColor: secondary + '20' }]}>
                                    <Ionicons name="time-outline" size={16} color={secondary} />
                                    <ThemedText style={[styles.statusText, { color: secondary }]}>
                                        Terminada
                                    </ThemedText>
                                </View>
                            </View>

                            <View style={styles.pruebaScores}>
                                {prueba.pruebas_tem.map((p: any, i: number) => (
                                    <View key={`${p.prueba}-${p.puntos}-${i}`} style={[styles.scoreItem,
                                        { backgroundColor: background, borderColor: opaco }
                                    ]}>
                                        <View style={styles.scoreContent}>
                                            <ThemedText type='semi-bold' style={styles.pruebaNombreText} numberOfLines={2}>
                                                { p.prueba }
                                            </ThemedText>
                                            
                                            <View style={[styles.puntajeBadge, { backgroundColor: secondary }]}>
                                                <ThemedText style={styles.puntajeText}>
                                                    { p.puntos ?? 'N/A' }
                                                </ThemedText>
                                            </View>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </Animated.View>

            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 14,
        borderWidth: 1,
        marginHorizontal: 15,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        overflow: 'hidden',
    },

    mainContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },

    rankAndImageContainer: {
      position: 'relative',
      marginRight: 12,
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
        fontSize: 15,
        fontWeight: '800',
        textAlign:'center'
    },

    detailText: {
        fontSize: 14,
        fontWeight: '500',
        textAlign:'center',
    },

    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // gap: 8,
    },

    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
        borderRadius: 6,
        gap: 3,
    },

    statText: {
        fontSize: 15,
        fontWeight: '600',
    },

    pruebaContainer: {
        borderRadius: 12,
        marginTop: 13,
        borderTopWidth: 1,
        padding: 10,
        paddingTop: 12,
    },

    pruebaHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },

    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        gap: 4,
    },

    pruebaScores: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'stretch',
    },

    scoreItem: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        justifyContent: 'center',
    },

    puntajeBadge: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 12,
        alignItems: 'center',
    },

    statusText: {
        fontSize: 12,
        fontWeight: '600',
    },

    pruebaIcon: {
        marginRight: 8,
    },

    pruebaNombre: {
        fontSize: 16,
        fontWeight: '600',
        flex: 1,
    },

    pruebaNombreText: {
        fontSize: 11,
        textAlign: 'center',
        marginBottom: 3,
    },
    
    scoreContent: {
        alignItems: 'center',
    },
    
    puntajeText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FFFFFF',
    },

});
