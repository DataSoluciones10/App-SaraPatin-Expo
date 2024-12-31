
// import { useState } from 'react';
// import { Ionicons } from '@expo/vector-icons';
// import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';

// import useThemeColors from '@/presentation/hooks/global/useThemeColors';
// import { ThemedText } from '../textos/ThemedText';



// interface Props {
//     datos: any; 
//     index: number;
//     isDeportista?: boolean;
// }



// export const TarjetaEscalafon = ({ datos, isDeportista=false, index }: Props) => {


//     const { secondary, text, opaco, background, disabledColor } = useThemeColors();
//     const [expanded, setExpanded] = useState(false);
//     const animatedHeight = useState(new Animated.Value(0))[0];


//     const toggleExpand = () => {
//       setExpanded(!expanded);
//       Animated.timing(animatedHeight, {
//         toValue: expanded ? 0 : 1,
//         duration: 300,
//         useNativeDriver: false,
//       }).start();
//     };




//     return (

//         <TouchableOpacity onPress={toggleExpand} style={[styles.card, {backgroundColor: (isDeportista) ? secondary : background, borderColor:opaco}]}>
//           <View style={styles.mainContent}>
//               <View style={styles.rankContainer}>
//                   <ThemedText style={styles.numero} numberOfLines={1}>
//                       {datos.numero.numero_competencia}
//                   </ThemedText>
//                   <ThemedText style={[styles.points, {color:(isDeportista) ? opaco : disabledColor}]} numberOfLines={1}>
//                       {datos.total} pts
//                   </ThemedText>
//               </View>
              
//               <View style={styles.infoContainer}>
//                   <ThemedText style={styles.name} numberOfLines={1}>{datos.nombre}</ThemedText>
//                   <ThemedText style={[styles.details, {color:(isDeportista) ? opaco : disabledColor}]} numberOfLines={1}>
//                       {datos.entidad}
//                   </ThemedText>
//                   <ThemedText style={[styles.details, {color:(isDeportista) ? opaco : disabledColor}]} numberOfLines={1}>
//                       Posición { index }
//                   </ThemedText>
//               </View>
      
//               <View style={styles.flecha}>
//                   <Ionicons size={20} color={text}
//                     name={expanded ? 'chevron-up-outline' : 'chevron-down-outline' }
//                   />
//               </View>
//           </View>
  
//           <Animated.View style={{overflow:'hidden', maxHeight:animatedHeight.interpolate({inputRange:[0, 1], outputRange:[0, 500]})}}>
//             {datos.pruebas?.map((prueba:any) => (
//               <View key={prueba.nombre} style={[styles.pruebaContainer, {borderColor: (false) ? opaco : disabledColor}]}>

//                 <ThemedText style={[styles.name, {marginBottom:7}]} numberOfLines={1}>{prueba.nombre}</ThemedText>

//                 <View style={styles.pruebaScores}>
//                   {prueba.pruebas_tem.map((p:any, i:any) => (
//                     <View key={`${p.prueba}-${p.puntos}-${i}`} style={[styles.scoreItem, {backgroundColor:background, borderColor:opaco}]}>
//                       <ThemedText type='semi-bold' style={{textAlign:'center', fontSize:12}} numberOfLines={2}>
//                           {p.prueba}
//                       </ThemedText>
//                       <ThemedText style={[styles.points, {color:(false) ? opaco : disabledColor}]} numberOfLines={1}>
//                           {p.puntos ?? 'N/A'}
//                       </ThemedText>
//                     </View>
//                   ))}
//                 </View>

//               </View>
//             ))}

//           </Animated.View>
//       </TouchableOpacity>

//     )
// }


// const styles = StyleSheet.create({
//   card: {
//     borderRadius: 12,
//     borderWidth: 1,
//     marginHorizontal: 15,
//     marginVertical: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
//     overflow: 'hidden',
//   },

//   mainContent: {
//     alignItems: 'stretch',
//     alignSelf: 'stretch',
//     borderRadius: 12,
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//   },

//   rankContainer: {
//     flex: 0.7,
//     flexDirection: 'column',
//     justifyContent: 'center', 
//     alignItems: 'center',  
//   },

//   flecha: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 0.5,
//   },

//   infoContainer: {
//     flex: 3,
//     alignItems: 'center',
//     flexDirection: 'column',
//     justifyContent: 'center', 
//     paddingHorizontal: 5,
//   },

//   name: {
//     fontSize: 16,
//     fontWeight: '900',
//     textAlign:'center',
//     alignSelf: 'stretch',
//   },

//   details: {
//     fontSize: 13,
//     fontWeight: '500',
//     textAlign:'center',
//     alignSelf: 'stretch',
//   },

//   numero: {
//     fontSize: 16,
//     fontWeight: '900',
//   },

//   points: {
//     fontSize: 13,
//     fontWeight: '500'
//   },

//   pruebaContainer: {
//     marginTop: 1,
//     padding: 7,
//     borderTopWidth: 1,
//   },

//   pruebaScores: {
//     flexDirection: 'row',
//     gap: 5,
//   },

//   scoreItem: {
//     padding: 5,
//     borderWidth: 1,
//     borderRadius: 8,
//     alignItems: 'center',
//     flex: 1,  
//   },
// });








//!22222222222222222222222
// import { useState } from 'react';
// import { Ionicons } from '@expo/vector-icons';
// import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
// import useThemeColors from '@/presentation/hooks/global/useThemeColors';
// import { ThemedText } from '../textos/ThemedText';


// interface Props {
//     datos: any;
//     index: number;
//     isDeportista?: boolean;
// }


// export const TarjetaEscalafon = ({ datos, isDeportista = false, index }: Props) => {
//     const { secondary, text, opaco, background, disabledColor, primary } = useThemeColors();
//     const [expanded, setExpanded] = useState(false);
//     const animatedHeight = useState(new Animated.Value(0))[0];

//     const toggleExpand = () => {
//         setExpanded(!expanded);
//         Animated.timing(animatedHeight, {
//             toValue: expanded ? 0 : 1,
//             duration: 300,
//             useNativeDriver: false,
//         }).start();
//     };

//     return (
//         <Animated.View style={[{ backgroundColor: isDeportista ? secondary : background, borderColor: opaco, 
//             transform: [{ scale: expanded ? 1.06 : 1 }]}, styles.card ]}
//         >
//             <TouchableOpacity onPress={toggleExpand} style={{flex: 1}}>
//                 <View style={styles.mainContent}>
//                     <View style={styles.rankContainer}>
//                         <View style={[styles.numberBadge, {backgroundColor: primary}]}>
//                             <ThemedText style={styles.competitionNumber}>
//                                 {datos.numero.numero_competencia}
//                             </ThemedText>
//                         </View>
//                         <View style={[styles.pointsBadge, {backgroundColor: isDeportista ? disabledColor : `${primary}50` }]}>
//                             <ThemedText style={[styles.points, { color: text }]}>
//                                 {datos.total} pts
//                             </ThemedText>
//                         </View>
//                     </View>

//                     <View style={styles.infoContainer}>
//                         <ThemedText style={styles.name} numberOfLines={1}>
//                             {datos.nombre}
//                         </ThemedText>
//                         <View style={styles.detailsContainer}>
//                             <View style={[styles.detailBadge, { backgroundColor:isDeportista ? disabledColor : `${primary}50` }]}>
//                                 <Ionicons name="business-outline" size={16} color={text} style={styles.detailIcon} />
//                                 <ThemedText style={[styles.details, { color: text }]} numberOfLines={1}>
//                                     {datos.entidad}
//                                 </ThemedText>
//                             </View>
//                             <View style={[styles.detailBadge, { backgroundColor: `${primary}50` }]}>
//                                 <Ionicons name="trophy-outline" size={16} color={text} style={styles.detailIcon} />
//                                 <ThemedText style={[styles.details, { color: text }]} numberOfLines={1}>
//                                     #{index}
//                                 </ThemedText>
//                             </View>
//                         </View>
//                     </View>
//                 </View>

//                 <Animated.View style={{overflow:'hidden', maxHeight: animatedHeight.interpolate({ inputRange:[0, 1], outputRange:[0, 500] })}}>
                    
//                     {datos.pruebas?.map((prueba: any) => (
//                         <View key={prueba.nombre} style={[styles.pruebaContainer, { borderColor: opaco }]}>
//                             <View style={styles.pruebaHeader}>
//                                 <Ionicons name="medal-outline" size={16} color={primary} />
//                                 <ThemedText style={styles.pruebaName} numberOfLines={1}>
//                                     {prueba.nombre}
//                                 </ThemedText>
//                             </View>

//                             <View style={styles.pruebaScores}>
//                                 {prueba.pruebas_tem.map((p: any, i: number) => (
//                                     <View key={`${p.prueba}-${p.puntos}-${i}`} 
//                                       style={[styles.scoreItem, { backgroundColor: `${primary}10`, borderColor: primary }]}
//                                     >
//                                         <ThemedText style={styles.pruebaNombre} numberOfLines={2}>
//                                             {p.prueba}
//                                         </ThemedText>
//                                         <View style={[styles.puntosContainer, { backgroundColor: `${primary}20` }]}>
//                                             <ThemedText style={styles.puntosText}>
//                                                 {p.puntos ?? 'N/A'}
//                                             </ThemedText>
//                                         </View>
//                                     </View>
//                                 ))}
//                             </View>
//                         </View>
//                     ))}
//                 </Animated.View>
//             </TouchableOpacity>
//         </Animated.View>
//     );
// }

// const styles = StyleSheet.create({

//     card: {
//         borderRadius: 14,
//         borderWidth: 1,
//         marginHorizontal: 16,
//         marginVertical: 5,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 8,
//         elevation: 5,
//         overflow: 'hidden',
//     },

//     mainContent: {
//         flexDirection: 'row',
//         padding: 10,
//         alignItems: 'center',
//     },

//     rankContainer: {
//         alignItems: 'center',
//         gap: 4,
//         marginRight: 12,
//     },

//     numberBadge: {
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },

//     competitionNumber: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: '900',
//     },

//     pointsBadge: {
//       paddingHorizontal: 12,
//       paddingVertical: 4,
//       borderRadius: 12,
//     },

//     points: {
//       fontSize: 14,
//       fontWeight: '700',
//     },

//     infoContainer: {
//       flex: 1,
//     },

//     name: {
//       fontSize: 16,
//       fontWeight: '900',
//       textAlign:'center',
//       alignSelf: 'stretch'
//     },

//     detailsContainer: {
//       flexDirection: 'column',
//       gap: 1,
//       alignItems:'center',
//     },

//     detailBadge: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       paddingHorizontal: 8,
//       paddingVertical: 4,
//       borderRadius: 8,
//     },

//     detailIcon: {
//         marginRight: 4,
//     },

//     details: {
//         fontSize: 13,
//         fontWeight: '600',
//     },


//     pruebaContainer: {
//       borderTopWidth: 1,
//       padding: 10,
//     },

//     pruebaHeader: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginBottom: 12,
//       gap: 4,
//     },

//     pruebaName: {
//       fontSize: 16,
//       fontWeight: '700',
//     },
      
//     pruebaScores: {
//       flexDirection: 'row',
//       gap: 8,
//     },
    
//     scoreItem: {
//       flex: 1,
//       padding: 5,
//       borderRadius: 12,
//       borderWidth: 1,
//       alignItems: 'center',
//     },

//     pruebaNombre: {
//       fontSize: 12,
//       fontWeight: '600',
//       textAlign: 'center',
//       marginBottom: 4,
//     },

//     puntosContainer: {
//         paddingHorizontal: 8,
//         paddingVertical: 4,
//         borderRadius: 8,
//     },

//     puntosText: {
//         fontSize: 14,
//         fontWeight: '700',
//     },

    
// });



















import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Animated, StyleSheet, TouchableOpacity, View, Easing } from 'react-native';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';

interface Props {
    datos: any;
    index: number;
    isDeportista?: boolean;
}

export const TarjetaEscalafon = ({ datos, isDeportista = false, index }: Props) => {
    const { secondary, text, opaco, background, disabledColor, primary } = useThemeColors();
    const [expanded, setExpanded] = useState(false);
    const animatedHeight = useState(new Animated.Value(0))[0];
    const fadeAnim = useState(new Animated.Value(0))[0];
    const rotateAnim = useState(new Animated.Value(0))[0];

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    const toggleExpand = () => {
        setExpanded(!expanded);
        Animated.parallel([
            Animated.timing(animatedHeight, {
                toValue: expanded ? 0 : 1,
                duration: 300,
                easing: Easing.bezier(0.4, 0, 0.2, 1),
                useNativeDriver: false,
            }),
            Animated.timing(rotateAnim, {
                toValue: expanded ? 0 : 1,
                duration: 300,
                easing: Easing.bezier(0.4, 0, 0.2, 1),
                useNativeDriver: true,
            })
        ]).start();
    };

    const getPositionColor = () => {
        if (index === 1) return '#FFD700';
        if (index === 2) return '#C0C0C0';
        if (index === 3) return '#CD7F32';
        return primary;
    };

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    });

    return (
        <Animated.View
            style={[
                styles.card,
                {
                    backgroundColor: isDeportista ? secondary : background,
                    borderColor: opaco,
                    transform: [{ scale: expanded ? 1.02 : 1 }],
                    opacity: fadeAnim,
                }
            ]}
        >
            <TouchableOpacity 
                onPress={toggleExpand}
                style={styles.touchable}
                activeOpacity={0.92}
            >
                <View style={styles.mainContent}>
                    <View style={styles.rankContainer}>
                        <View style={[styles.positionIndicator, { backgroundColor: getPositionColor() }]} />
                        <View style={[styles.numberBadge, { backgroundColor: getPositionColor() }]}>
                            <ThemedText style={styles.competitionNumber}>
                                {datos.numero.numero_competencia}
                            </ThemedText>
                        </View>
                        <View style={[styles.pointsBadge, { backgroundColor: `${getPositionColor()}15` }]}>
                            <Ionicons name="star" size={14} color={getPositionColor()} />
                            <ThemedText style={[styles.points, { color: getPositionColor() }]}>
                                {datos.total} pts
                            </ThemedText>
                        </View>
                    </View>

                    <View style={styles.infoContainer}>
                        <View style={styles.nameContainer}>
                            <ThemedText style={styles.name} numberOfLines={1}>
                                {datos.nombre}
                            </ThemedText>
                            <View style={[styles.rankBadge, { backgroundColor: getPositionColor() }]}>
                                <ThemedText style={styles.rankText}>#{index}</ThemedText>
                            </View>
                        </View>
                        <View style={styles.detailsContainer}>
                            <View style={[styles.detailBadge, { backgroundColor: `${getPositionColor()}10` }]}>
                                <Ionicons name="business-outline" size={16} color={getPositionColor()} style={styles.detailIcon} />
                                <ThemedText style={[styles.details, { color: getPositionColor() }]} numberOfLines={1}>
                                    {datos.entidad}
                                </ThemedText>
                            </View>
                        </View>
                    </View>

                    <Animated.View style={[styles.expandButton, { transform: [{ rotate: spin }] }]}>
                        <Ionicons
                            size={24}
                            color={getPositionColor()}
                            name="chevron-down-outline"
                        />
                    </Animated.View>
                </View>

                <Animated.View
                    style={[
                        styles.expandedContent,
                        {
                            maxHeight: animatedHeight.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 500]
                            })
                        }
                    ]}
                >
                    {datos.pruebas?.map((prueba: any) => (
                        <View
                            key={prueba.nombre}
                            style={[styles.pruebaContainer, { borderColor: `${getPositionColor()}30` }]}
                        >
                            <View style={styles.pruebaHeader}>
                                <View style={[styles.pruebaIcon, { backgroundColor: `${getPositionColor()}15` }]}>
                                    <Ionicons name="medal-outline" size={20} color={getPositionColor()} />
                                </View>
                                <ThemedText style={[styles.pruebaName, { color: getPositionColor() }]} numberOfLines={1}>
                                    {prueba.nombre}
                                </ThemedText>
                            </View>

                            <View style={styles.pruebaScores}>
                                {prueba.pruebas_tem.map((p: any, i: number) => (
                                    <View
                                        key={i}
                                        style={[
                                            styles.scoreItem,
                                            {
                                                backgroundColor: `${getPositionColor()}08`,
                                                borderColor: `${getPositionColor()}30`
                                            }
                                        ]}
                                    >
                                        <ThemedText style={[styles.pruebaNombre, { color: getPositionColor() }]} numberOfLines={2}>
                                            {p.prueba}
                                        </ThemedText>
                                        <View style={[styles.puntosContainer, { backgroundColor: `${getPositionColor()}15` }]}>
                                            <ThemedText style={[styles.puntosText, { color: getPositionColor() }]}>
                                                {p.puntos ?? 'N/A'}
                                            </ThemedText>
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
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        borderWidth: 1,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
        overflow: 'hidden',
    },
    touchable: {
        flex: 1,
    },
    mainContent: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        position: 'relative',
    },
    positionIndicator: {
        position: 'absolute',
        left: -16,
        top: -16,
        bottom: -16,
        width: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    rankContainer: {
        alignItems: 'center',
        gap: 8,
        marginRight: 16,
        paddingLeft: 4,
    },
    numberBadge: {
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    competitionNumber: {
        color: 'white',
        fontSize: 18,
        fontWeight: '900',
    },
    pointsBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    points: {
        fontSize: 14,
        fontWeight: '700',
    },
    infoContainer: {
        flex: 1,
        gap: 8,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: '900',
        flex: 1,
    },
    rankBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    rankText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '700',
    },
    detailsContainer: {
        flexDirection: 'row',
        gap: 8,
        flexWrap: 'wrap',
    },
    detailBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
    },
    detailIcon: {
        marginRight: 6,
    },
    details: {
        fontSize: 13,
        fontWeight: '600',
    },
    expandButton: {
        padding: 8,
        marginLeft: 8,
    },
    expandedContent: {
        overflow: 'hidden',
    },
    pruebaContainer: {
        borderTopWidth: 1,
        padding: 16,
    },
    pruebaHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 12,
    },
    pruebaIcon: {
        padding: 8,
        borderRadius: 12,
    },
    pruebaName: {
        fontSize: 16,
        fontWeight: '700',
    },
    pruebaScores: {
        flexDirection: 'row',
        gap: 12,
    },
    scoreItem: {
        flex: 1,
        padding: 12,
        borderRadius: 14,
        borderWidth: 1,
        alignItems: 'center',
    },
    pruebaNombre: {
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 8,
    },
    puntosContainer: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 10,
        minWidth: 50,
        alignItems: 'center',
    },
    puntosText: {
        fontSize: 15,
        fontWeight: '800',
    },
});