
import { useModalStore } from '@/presentation/stores'
import { View, Modal, StyleSheet, useColorScheme, Text, ScrollView, Pressable } from 'react-native'
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';




interface Props {
    children: any;
    titulo: string;
}




export const ModalScreen = ({ children, titulo }:Props) => {


    const colorScheme  = useColorScheme();
    const { modalForm, modalFormToggle } = useModalStore();
    const { background, error } = useThemeColors();
    const fondo = colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.5)';



    return (

        // <View style={[styles.container, {backgroundColor: background}]}>
        //     <Modal animationType="slide" transparent={true}
        //         visible={modalForm} onRequestClose={() => modalFormToggle(false)} 
        //     >

        //         <View style={[styles.modalContainer, {backgroundColor: fondo}]}>
        //             <View style={[styles.centeredContent, {backgroundColor: background}]}>
        //                 {/* Titulo modal */}
        //                 <ThemedText type='h2' bold style={{textAlign:'center', marginBottom:20}}>
        //                     {titulo}
        //                 </ThemedText>

        //                 <ScrollView>

        //                     {/* Contenido del modal */}
        //                     { children }

        //                     <View style={styles.buttonContainer}>
        //                         <Pressable style={{backgroundColor:error, borderRadius:5, flex:1 }}
        //                             className="px-4 py-3 flex-row items-center justify-center active:opacity-70"
        //                             onPress={ () => modalFormToggle(false) }
        //                         >
        //                             <Text style={{fontSize:15, color:'white', fontWeight:'600'}}>Cerrar Modal</Text>
        //                         </Pressable>
        //                     </View>
        //                 </ScrollView>
        //             </View>

        //         </View>
        //     </Modal>
        // </View>



        <Modal animationType="slide" transparent={true} visible={modalForm} onRequestClose={() => modalFormToggle(false)}>
            <View style={[styles.modalContainer, { backgroundColor: fondo }]}>
                <View style={[styles.centeredContent, { backgroundColor: background }]}>
                    <ThemedText type='h2' bold style={{ textAlign: 'center', marginBottom: 20 }}>
                        {titulo}
                    </ThemedText>
                    <ScrollView>
                        {children}
                        <View style={styles.buttonContainer}>
                            <Pressable
                                style={{ backgroundColor: error, borderRadius: 5, flex: 1 }}
                                className="px-4 py-3 flex-row items-center justify-center active:opacity-70"
                                onPress={() => modalFormToggle(false)}
                            >
                                <Text style={{ fontSize: 15, color: 'white', fontWeight: '600' }}>Cerrar Modal</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )

}



const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },

    // modalContainer: {
    //     flex: 1,
    //     justifyContent: 'center', 
    //     alignItems: 'center',   
    // },

    // centeredContent: {
    //     width: '85%', 
    //     // maxHeight: '90%', 
    //     padding: 15,
    //     borderRadius: 10,     
    // },

    // buttonContainer: {
    //     width:'100%',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     paddingHorizontal: 15
    // },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredContent: {
        width: '85%',
        padding: 15,
        borderRadius: 10,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
});