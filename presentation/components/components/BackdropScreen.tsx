

import { View, Text, Modal, StyleSheet, ActivityIndicator } from 'react-native'



interface Props {
    titulo: string;
    visible: boolean;
}



export const BackdropScreen = ({ titulo, visible }:Props) => {


    return (
        <Modal transparent={true} visible={visible} animationType="fade">
            <View style={styles.backdrop}>
                <ActivityIndicator size="large" color="white" />
                <Text style={styles.text}>{titulo}</Text>
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
    text: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
        paddingHorizontal: 20,
    }
});
