

import { View, Modal, StyleSheet, ActivityIndicator, Text } from 'react-native'



interface Props {
    titulo: string;
    visible: boolean;
}



export const BackdropScreen = ({ titulo, visible }:Props) => {


    return (
        <Modal transparent={true} visible={visible} animationType="fade">
            <View style={styles.backdrop}>
                <ActivityIndicator size={40} color="white" />
                <Text style={{fontSize:16, color:'white', fontWeight:'bold'}}>{ titulo }</Text>
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
