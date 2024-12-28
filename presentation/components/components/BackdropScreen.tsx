

import { View, Modal, StyleSheet, ActivityIndicator } from 'react-native'
import { ThemedText } from '../textos/ThemedText';



interface Props {
    titulo: string;
    visible: boolean;
}



export const BackdropScreen = ({ titulo, visible }:Props) => {


    return (
        <Modal transparent={true} visible={visible} animationType="fade">
            <View style={styles.backdrop}>
                <ActivityIndicator size={40} color="white" />
                <ThemedText type='semi-bold' bold style={{fontSize:16}}>{ titulo }</ThemedText>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
