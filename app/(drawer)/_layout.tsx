
import { Drawer } from 'expo-router/drawer';



const DrawerLayout = () => {

    return (
        <Drawer>
            <Drawer.Screen
                name="index" 
                options={{ drawerLabel: 'Home', title: 'overview' }}
            />
            <Drawer.Screen
                name="user/[id]" 
                options={{ drawerLabel: 'User', title: 'overview' }}
            />
        </Drawer>
    )


}

export default DrawerLayout