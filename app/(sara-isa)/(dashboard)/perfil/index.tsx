
import { DisenioPagina } from '@/presentation/layouts'
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { CargandoScreen, InformacionItem, SettingsItems, ThemedText } from '@/presentation/components';
import { useAuthStore } from '@/presentation/stores';
const url = process.env.EXPO_PUBLIC_API_URL_ANDROID;
                    


const PerfilScreen = () => {


    const { primary, background, error } = useThemeColors();
    const { user, startLogout } = useAuthStore();
    

    if( !user ) {
        return (
            <DisenioPagina title='Mi Perfil'>
                <CargandoScreen titulo="Cargando Información..." />
            </DisenioPagina>
        )
    }


    const handleLogout = () => {
        Alert.alert( "Cerrar Sesión", "¿Estás seguro que deseas cerrar sesión?",
            [
            { text: "Cancelar", style: "cancel" },
            { text: "Cerrar Sesión", style: "destructive", onPress: () => startLogout() }
            ]
        );
    };


    return (

        <DisenioPagina title='Mi Perfil'>

            <ScrollView style={{backgroundColor:background, flex:1}}>
                {/* Profile Header */}
                <View style={{backgroundColor:background, paddingTop:25, paddingBottom:20, paddingHorizontal:20}}>
                    <View className="items-center pb-3">
                        <View className="relative w-36 h-36 mb-1"> 
                            <Image className="w-full h-full rounded-3xl object-cover"
                                source={user.img 
                                ? { uri: `${url}/uploads/usurio/${user.img}` } 
                                : require('../../../../assets/images/user/no-img.webp')
                                }
                            />
                        </View>
                        <View className="items-center space-y-1">
                            <ThemedText type='h3' style={{fontSize:17}} numberOfLines={1}>{user.nombre}</ThemedText>
                            <ThemedText type='semi-bold' numberOfLines={1} style={{fontSize:12, color:'gray'}}>
                                {user.rol.name}
                            </ThemedText>
                            {/* <ThemedText type='semi-bold' numberOfLines={1} style={{fontSize:12, color:'gray'}}>
                                Miembro desde 2024
                            </ThemedText> */}
                        </View>
                    </View>

                    <View className="flex-row items-center justify-between gap-4 py-4">
                        <TouchableOpacity style={{ backgroundColor: primary }}
                            className="flex-1 flex-row items-center justify-center space-x-2 py-3 rounded-xl"
                        >
                            <Ionicons name="create-outline" size={20} color="white" />
                            <Text className="text-white font-medium">Editar Perfil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor: error}} onPress={ handleLogout }
                            className="flex-1 flex-row items-center justify-center space-x-2 py-3 rounded-xl"
                        >
                            <Ionicons name="log-out-outline" size={20} color="white" />
                            <Text className="text-white font-medium">Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Info Sections */}
                <View style={{backgroundColor:background, paddingBottom:20, paddingHorizontal:20}}>
                    <View>
                        <ThemedText type='normal' style={{fontSize:15, color:'gray', fontWeight:'bold'}}>
                            Información Personal
                        </ThemedText>

                        <View style={{marginTop:3}}>
                            <InformacionItem 
                                icon="id-card-outline"
                                label={user.tipo_documento} mb={7}
                                value={user.cedula}
                            />

                            <InformacionItem 
                                icon="mail-outline" mb={7}
                                label="Correo Electrónico"
                                value={user.correo}
                            />

                            <InformacionItem 
                                icon="call-outline"
                                label="Teléfono" mb={7}
                                value={user.movil}
                            />

                            <InformacionItem 
                                icon="location-outline"
                                label="Ciudad" mb={7}
                                value={user.ciudad?.name}
                            />

                            <InformacionItem 
                                icon="shield-checkmark-outline"
                                label="Verificación" mb={7}
                                value="Cuenta Verificada"
                                verificar={user.terminos}
                            />
                        </View>
                    </View>

                    <View style={{marginTop:15}}>
                        <ThemedText type='normal' style={{fontSize:15, color:'gray', fontWeight:'bold'}}>
                            Preferencias
                        </ThemedText>

                        <View style={{marginTop:3}}>

                            <SettingsItems mb={7}
                                icon="notifications-outline"
                                label="Notificaciones"
                            />

                            <SettingsItems mb={7}
                                icon="lock-closed-outline"
                                label="Privacidad"
                            />

                            <SettingsItems mb={7}
                                icon="moon-outline"
                                label="Tema Oscuro"
                                showSwitch={true}
                                switchValue={true}
                            />

                        </View>
                    </View>
                </View>

                <View className="h-20" /> 
            </ScrollView>
        </DisenioPagina>

    )
}


export default PerfilScreen