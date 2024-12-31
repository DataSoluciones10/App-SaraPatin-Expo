
import { View, Image, ScrollView } from 'react-native';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { DisenioPagina } from '@/presentation/layouts';
import { CargandoScreen, InformacionItem, SettingsItems, ThemedButton, ThemedText } from '@/presentation/components';
import { useAuthStore } from '@/presentation/stores';
import { documentos } from '@/presentation/data';
import { useAlertConConfirm } from '@/presentation/hooks';


const url = process.env.EXPO_PUBLIC_API_URL_DESARROLLO;
                    



const PerfilScreen = () => {


    const { background, error } = useThemeColors();
    const { user, startLogout } = useAuthStore();
    const { showDialog, AlertModal } = useAlertConConfirm();



    const handleMostrarAlerta = () => {
        showDialog({
            title: "Cerrar Sesión",
            message: "¿Estás seguro que deseas cerrar sesión?",
            confirmText: "Sí, cerrar",
            cancelText: "No, cancelar",
            type: "primary",  // 'default' | 'success' | 'warning' | 'error'
            onConfirm: () => { startLogout() },
            onCancel: () => { console.log("Cancelado"); }
        });
    };




    return (

        <DisenioPagina title='Mi Perfil'>
            <AlertModal />

            { (!user)
            ?   <CargandoScreen titulo="Cargando Información..." />

            :    <ScrollView style={{backgroundColor:background, flex:1}}>
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

                        <View className="flex-row w-full gap-4 pt:-2 pb-4">
                            <View className="flex-1">
                                <ThemedButton icon="search" onPress={null}>
                                    Editar
                                </ThemedButton>
                            </View>
                            
                            <View className="flex-1">
                                <ThemedButton icon="cloud-download-outline" onPress={ handleMostrarAlerta } color={error} >
                                    Logout
                                </ThemedButton>
                            </View>
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
                                    label={documentos[user.tipo_documento] ?? 'Documento desconocido'} mb={7}
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
            }
        </DisenioPagina>
    )
}


export default PerfilScreen