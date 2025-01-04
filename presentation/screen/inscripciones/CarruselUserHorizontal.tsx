
import { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useInscripcionStore } from '@/presentation/stores';
import { ThemedText, TituloObjetoVacio } from '@/presentation/components';
import { PosterInscripciones } from './PosterInscripciones';





interface Props {
    titulo: string;
    datos: any;
    items: string[];
    setItems: any;
    loadNextPage?: any;
}




export const CarruselUserHorizontal = ({ titulo, datos, items, setItems, loadNextPage }:Props) => {

    
    const { idsInscripciones } = useInscripcionStore();


    const handleToggleSelect = useCallback((name:any) => {
        setItems((prevSelected:any) => {
            const newSelected = prevSelected.some((item:any) => item.id === name.id)
                ? prevSelected.filter((item:any) => item.id !== name.id)
                : [...prevSelected, name];
            return newSelected;
        });
    }, [setItems]);


    
    return (

        <View className='my-3'>

            <ThemedText type='h3' bold className='pl-5 pb-1'>{ titulo }</ThemedText>

            {datos && datos.length > 0 ? (
            <FlatList 
                horizontal
                data={ datos }
                showsHorizontalScrollIndicator={ false }
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ gap:9, padding:7 }}
                extraData={items}
                renderItem={ ({ item }) => 
                    <PosterInscripciones
                        img={item.img}
                        isInscrito={idsInscripciones.includes(item.id)}
                        nombre={item.nombre}
                        // inscribir={items.includes(item.id)}
                        inscribir={items.some((i:any) => i.id === item.id )}
                        onPress={ () => handleToggleSelect(item) }
                    />
                }
            />
            ) : (
                <View className="flex-row h-20 mx-2">
                    <TituloObjetoVacio titulo="No tienes deportistas en este tipo patin." />  
                </View>
                )}
        </View>

    )
}
