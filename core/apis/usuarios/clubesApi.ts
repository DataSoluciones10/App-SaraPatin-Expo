
import axios from 'axios';
import { Platform } from 'react-native';
import { SecureStorage } from '@/core/adapters/secure-storage';


const STAGE = process.env.EXPO_PUBLIC_STAGE || 'dev';


const API_URL = 
    (STAGE === 'prod')
    ? process.env.EXPO_PUBLIC_API_URL
    : (Platform.OS) === 'ios'
    ? process.env.EXPO_PUBLIC_API_URL_IOS
    : process.env.EXPO_PUBLIC_API_URL_ANDROID;



const clubesApi = axios.create({
    baseURL: `${API_URL}/clubes`,
});



clubesApi.interceptors.request.use(
    async (config) => {
        const token = await SecureStorage.getItem('token');
        if( token ) { config.headers['Authorization'] = `Bearer ${ token }`; }
        return config;
    }
)




export { clubesApi }