
import { LinearGradient } from 'expo-linear-gradient';







export const GradientePoster = () => {

    return (
        <LinearGradient
            colors={['rgba(0, 0, 0, 0.8)', 'transparent']}
            start={{ x: 0.5, y: 1 }} 
            end={{ x: 0.5, y: 0.5 }} 
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '80%', 
            }}
        />
    )

}
