
import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';



interface Props extends ViewProps {
    className?: string;
    margin?: boolean;
    safe?: boolean;
    bgColor?: string;
}



export const ThemedView = ({ style, className, margin=false, children, safe=false, bgColor}: Props) => {

    const backgroundColor = bgColor ??  useThemeColor({}, 'background');
    const safeArea = useSafeAreaInsets();

    return (
        <View style={[ style,
            { backgroundColor:backgroundColor, flex:1, paddingTop: safe ? safeArea.top : 0, marginHorizontal: margin ? 10 : 0},
        ]}
        className={className}
        >
            { children }
        </View>
    )

}
