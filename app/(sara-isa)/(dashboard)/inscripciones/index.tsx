
import { useState } from 'react';;
import { View } from 'react-native';
import { ScrollView } from 'react-native';

import { DisenioPagina } from '@/presentation/layouts';
import { FormInscripciones } from '@/presentation/screen/inscripciones';
import { ThemedText, CarruselUserHorizontal } from '@/presentation/components';
import { deportesData } from '@/presentation/data';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';





const Inscripciones = () => {



    const { background } = useThemeColors();
    const [items, setItems] = useState<string[]>([]);



    const handleGenerarInscripcion = () => {
        console.log('Holis');
    }




    return (

        <DisenioPagina title='Inscripciones'>
            <ScrollView style={{ backgroundColor:background }}>

                <View className='mt-3 mb-7'>
                    <FormInscripciones items={items} setItems={setItems} />
                </View>

                <View className='my-3'>
                    <ThemedText type='h3' bold className='pl-4 pb-1'>Semiprofesional</ThemedText>
                    <CarruselUserHorizontal datos={deportesData ?? []} items={items} setItems={setItems} />
                </View>

                <View className='my-3'>
                    <ThemedText type='h3' bold className='pl-4 pb-1'>Novatos</ThemedText>
                    <CarruselUserHorizontal datos={deportesData ?? []} items={items} setItems={setItems} />
                </View>


                <View className='my-3'>
                    <ThemedText type='h3' bold className='pl-4 pb-1'>Ligados</ThemedText>
                    <CarruselUserHorizontal datos={deportesData ?? []} items={items} setItems={setItems} />
                </View>


                <View style={{height:20}} />
            </ScrollView>
        </DisenioPagina>
    )
}

export default Inscripciones