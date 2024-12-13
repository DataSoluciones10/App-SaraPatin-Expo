
// import { create } from "zustand";
// import { devtools } from "zustand/middleware";
// import { getEnvVariables } from "../../helpers";
// import { io, Socket } from "socket.io-client";




// const { VITE_APP_URL_SOCKET: serverPath } = getEnvVariables();


// interface SocketState {

//     socket: Socket | null;
//     online: boolean;

//     // setSocket: (socket: Socket) => void;
//     // setOnline: (status: boolean) => void;
//     conectarSocket: () => void;
//     desconectarSocket: () => void;
// }




// export const useSocketStore = create<SocketState>()(
//     devtools((set, get) => ({

//     socket: null,
//     online: false,

    

//     conectarSocket: () => {
//         if(get().socket) return;

//         const socketTemp = io(serverPath, { 
//             transports: ['websocket'],
//             autoConnect: true,
//             forceNew: true,
//         });
//         set({ socket: socketTemp });

//         socketTemp.on('connect', () => set({ online: true }));
//         socketTemp.on('disconnect', () => set({ online: false }));
//     },



//     desconectarSocket: () => {
//         set((state:any) => {
//             state.socket?.disconnect();
//             return { socket: null, online: false };
//         });
//     },

//     // setSocket: (socket:any) => set({ socket }),
//     // setOnline: (online:any) => set({ online }),

// })));

