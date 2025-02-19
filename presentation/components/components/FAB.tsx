
import { Ionicons } from '@expo/vector-icons';
import { StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';



interface Props {
    iconName: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}





export const FAB = ({ style, iconName, onPress }: Props) => {


    const { primary } = useThemeColors();


    return (
        <TouchableOpacity
            style={[ style,
                { position:'absolute', bottom:30, right:20, width:60, height:60,
                    shadowColor:primary, backgroundColor: primary, shadowOffset: { width:0, height:10 },
                    shadowOpacity:0.4, shadowRadius:10, elevation:3, borderRadius:13,
                    alignItems:'center', justifyContent:'center',
                },
            ]}
            onPress={onPress}
        >

            <Ionicons name={iconName} size={30} color="white" />

        </TouchableOpacity>
    );
};