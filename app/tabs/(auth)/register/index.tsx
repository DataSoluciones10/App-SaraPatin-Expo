
import { KeyboardAvoidingView, useWindowDimensions, View, ScrollView } from 'react-native';

import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';
import ThemedButton from '@/presentation/components/shared/ThemedButton';
import TextInputThemed from '@/presentation/components/inputs/TextInputThemed';
import TextInputPassword from '@/presentation/components/inputs/TextInputPassword';
import ThemedText from '@/presentation/components/shared/ThemedText';
import ThemedLink from '@/presentation/components/shared/ThemedLink';





const RegisterScreen = () => {


    const { height } = useWindowDimensions();
    const textColor = useThemeColor({}, 'primary');
    const bgcolor = useThemeColor({}, 'background');



    return (

        <KeyboardAvoidingView style={{flex:1}}>
            <ScrollView style={{paddingHorizontal:30, backgroundColor:bgcolor}}>

                <View style={{paddingTop:height * 0.25}}>
                    <ThemedText type='h1' bold>Crear Cuenta</ThemedText>
                    <ThemedText>Por favor crea una cuenta</ThemedText>

                    <View style={{marginTop:20}}>
                        <TextInputThemed
                            placeholder='Nombre Completo'
                            autoCapitalize='none'
                            icon={'person-outline'}
                        />

                        <TextInputThemed
                            placeholder='Tipo de Documento'
                            autoCapitalize='none'
                            icon={'keypad-outline'}
                        />


                        <TextInputThemed
                            placeholder='Numero de Documento'
                            autoCapitalize='none'
                            icon={'id-card-outline'}
                        />


                        <TextInputThemed
                            placeholder='Correo Electronico'
                            keyboardType='email-address'
                            autoCapitalize='none'
                            icon={'mail-outline'}
                        />

                    </View>
                </View>


                <View className='mt-2' />


                <ThemedButton
                    icon="save-outline"
                    // onPress={onLogin}
                    // disabled={isPosting}
                >
                    Crear Cuenta
                </ThemedButton>


                <View className="flex-row justify-center items-center mt-7">
                    <ThemedText>Ya tienes cuenta?</ThemedText>
                    <ThemedLink href="/tabs/login" style={{color:textColor, marginLeft:7}}>Ingresar</ThemedLink>
                </View>


            </ScrollView>
        </KeyboardAvoidingView>
    )


}



export default RegisterScreen