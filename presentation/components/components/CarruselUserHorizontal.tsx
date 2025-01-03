
import { Pressable, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ThemedText } from '../textos/ThemedText';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { GradientePoster } from '../gradientes/GradientePoster';
import { TituloObjetoVacio } from './TituloObjetoVacio';


const url = process.env.EXPO_PUBLIC_API_URL_DESARROLLO;



interface Props {
    titulo: string;
    datos: any;
    items: string[];
    setItems: any;
    loadNextPage?: any;
}




export const CarruselUserHorizontal = ({ titulo, datos, items, setItems, loadNextPage }:Props) => {

    
    const { success } = useThemeColors();


    const handleToggleSelect = (item: string) => {
        setItems((prev: string[]) =>
            prev.includes(item) ? prev.filter(id => id !== item) : [...prev, item]
        );
    };



    return (

        <View className='my-3'>
            <ThemedText type='h3' bold className='pl-5 pb-1'>{ titulo }</ThemedText>

            {datos && datos.length > 0 ? (
            <FlatList 
                horizontal
                data={ datos }
                showsHorizontalScrollIndicator={ false }
                keyExtractor={(item) => item.id}
                renderItem={ ({ item }) => 
                    <Pressable className={`active:opacity-90 px-1`} onPress={() => handleToggleSelect(item.id)}>
                        <View style={{ position:'relative', width: 80, height:120, overflow:'hidden', borderRadius:12 }}>
                            <Image resizeMode="cover" style={{ width:'100%', height:'100%' }}
                                source={item.img 
                                ? { uri: `${url}/uploads/deportistas/${item.img}` } 
                                : require('../../../assets/images/user/no-avatar.webp')
                                }
                            />

                            <GradientePoster />
                            <View className="absolute bottom-1 left-1 right-1 px-1 py-1 rounded-md zIndex-3">
                                <ThemedText className="text-center overflow-hidden mt-1" type='semi-bold' 
                                    numberOfLines={2} ellipsizeMode="tail" style={{color:'white', fontSize:10}}
                                >
                                    { item.nombre }
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
                // onEndReached={ () => loadNextPage()! }
                // onEndReachedThreshold={ 0.8 }
            />
            ) : (
                <View className="flex-row h-20 mx-2">
                    <TituloObjetoVacio titulo="No tienes deportistas en este tipo patin." />  
                </View>
                )}
        </View>


    )

}
