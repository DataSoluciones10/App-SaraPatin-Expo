

// import axios from 'axios';
// import { getEnvVariables } from '../../helpers';
// import { useAuthStore } from '../../store';


// const { VITE_APP_API_URL: url } = getEnvVariables();



// const rolesApi = axios.create({
//     baseURL: `${url}/roles`
// });


// rolesApi.interceptors.request.use(
//     (config) => {
//         const token = useAuthStore.getState().token;

//         if ( token ) {
//             config.headers['Authorization'] = `Bearer ${ token }`;
//         }

//         return config;
//     }
// )



// export {
//     rolesApi
// }