


import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';



interface Props {
    onPress: () => void;
    iconName?: keyof typeof Ionicons.glyphMap;
    style?: StyleProp<ViewStyle>;
}




export const BotonCamaraUser = ({ onPress, style, iconName }:Props) => {


    return (
        <TouchableOpacity onPress={ onPress } style={[ style ]} >
            {(iconName) &&
                <Ionicons name={ iconName } size={30} color="white" />
            }
        </TouchableOpacity>
    )
}
