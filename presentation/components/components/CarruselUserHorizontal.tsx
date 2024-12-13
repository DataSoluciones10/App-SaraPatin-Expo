
import { Pressable, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '../textos/ThemedText';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { GradientePoster } from '../gradientes/GradientePoster';



const imagenPredeterminada = 'https://www.fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg?rxy=0.32986930611281567,0.18704579979466449&rnd=133378758718600000';




export const CarruselUserHorizontal = ({ datos, items, setItems }:any) => {

    
    const { success } = useThemeColors();


    const handleToggleSelect = (item: string) => {
        setItems((prev: string[]) =>
            prev.includes(item) ? prev.filter(id => id !== item) : [...prev, item]
        );
    };



    return (

        <View>
            <FlatList 
                horizontal
                data={ datos }
                showsHorizontalScrollIndicator={ false }
                renderItem={ ({ item }) => 
                    <Pressable className={`active:opacity-90 px-1`} onPress={() => handleToggleSelect(item.id)}>
                        <View style={{ position:'relative', width: 80, height:120, overflow:'hidden', borderRadius:12 }}>
                            <Image resizeMode="cover" style={{ width:'100%', height:'100%' }}
                                source={{ uri: item.imagen || imagenPredeterminada }}
                                // source={item.imagen ? { uri: item.imagen } : images.noImg}
                            />

                             {/* Gradiente de Imagen */}
                            <GradientePoster />
                    
                            <View className="absolute bottom-1 left-1 right-1 px-1 py-1 rounded-md zIndex-3">
                                <ThemedText className="text-center overflow-hidden mt-1" type='semi-bold' 
                                    numberOfLines={2} ellipsizeMode="tail" style={{color:'white', fontSize:10}}
                                >
                                    Julian David Cortes Rincon
                                </ThemedText>
                            </View>

                            {items.includes(item.id) && (
                                <View style={{ position:'absolute', top:3, right:3, borderRadius:12,
                                    backgroundColor:success, padding:4, zIndex:10,
                                }}>
                                    <Ionicons name="checkmark-outline" size={12} color="white" />
                                </View>
                            )}
                        </View>
                    </Pressable>
                }
            />
        </View>
    )

}
