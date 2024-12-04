
import { Text, Pressable, ActivityIndicator } from 'react-native';





export const ButtonIsPosting = () => {

    return (
        <Pressable onPress={null} style={{backgroundColor:'gray' }} disabled={true} 
            // className="px-4 py-3 flex-row rounded-md items-center justify-center"
            className="px-4 py-3 flex-row rounded-md items-center justify-center gap-3"
        >
            <ActivityIndicator size="small" color="white" />
            <Text className="text-white font-semibold">Cargando...</Text>
        </Pressable>
    )
}
