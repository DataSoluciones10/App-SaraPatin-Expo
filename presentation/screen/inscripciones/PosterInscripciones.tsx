
import { Image, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GradientePoster, ThemedText } from "@/presentation/components"
import useThemeColors from "@/presentation/hooks/global/useThemeColors";


const url = process.env.EXPO_PUBLIC_API_URL_DESARROLLO;



interface Props {
    nombre: string;
    isInscrito?: boolean;
    inscribir?: boolean;
    onPress?: any;
    img?: string;
}


export const PosterInscripciones = ({ img, isInscrito=false, nombre, inscribir=false, onPress }:Props) => {


    const { success } = useThemeColors();

    
    return (

        <Pressable className="active:opacity-70"
            style={{ width:85, aspectRatio:2/3, borderRadius:12, overflow:'hidden', backgroundColor:success }}
            onPress={isInscrito ? null : onPress}
        >
            <View style={{flex:1, position:'relative'}}>
                <Image resizeMode="cover" style={{ width:'100%', height:'100%' }}
                    source={img 
                    ? { uri: `${url}/uploads/deportistas/${img}` } 
                    : require('../../../assets/images/user/no-avatar.webp')
                    }
                />

                <GradientePoster />
                <View style={{ position:'absolute', bottom:1, borderRadius:12, justifyContent: 'center',  
                    alignItems: 'center', paddingHorizontal:4, paddingVertical:4, width:'100%', display:'flex',    
                }}>
                    <ThemedText type='semi-bold' numberOfLines={2} 
                        style={{color:'white', fontSize:10, textAlign:'center'}}
                    >
                        { nombre }
                    </ThemedText>
                </View>

                {isInscrito && (
                <View className="absolute inset-0 flex justify-center items-center">
                    <View style={{ borderWidth:1.5, borderColor:success, borderStyle:'dashed',
                        borderRadius:4, backgroundColor: 'rgba(0, 0, 0, 0.6)', transform:[{rotate:'-10deg'}],
                        width:'100%', paddingHorizontal:8, paddingVertical:4
                    }}>
                        <ThemedText style={{ color:success, fontSize:13, fontWeight:'700', textAlign:'center'}}>
                            Inscrito
                        </ThemedText>
                    </View>
                </View>
                )}

                {inscribir && (
                    <View style={{position: 'absolute', top: 3, right: 3, borderRadius: 12,
                        backgroundColor:success, padding: 4, zIndex: 10
                    }}>
                        <Ionicons name="checkmark-outline" size={12} color="white" />
                    </View>
                )}
            </View> 
        </Pressable>
    )
}
