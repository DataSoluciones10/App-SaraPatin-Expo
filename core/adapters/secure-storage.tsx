
import { Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';



export class SecureStorage {


    static async setItem(key: string, value: string){
        try {
            await SecureStore.setItemAsync(key, value);
        } catch (error) {
            Alert.alert('Error', 'Failed to save data');
        }
    }


    
    static async getItem(key: string){
        try {
            return await SecureStore.getItemAsync(key);
        } catch (error) {
            Alert.alert('Error', 'Fallo al obtener data.');
        }
    }



    static async deleteItem(key: string){
        try {
            await SecureStore.deleteItemAsync(key);
        } catch (error) {
            Alert.alert('Error', 'Fallo al eliminar data.');
        }
    }

}