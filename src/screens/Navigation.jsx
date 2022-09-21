import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./HomeScreen"
import {NavigationContainer} from '@react-navigation/native'
import Game from "./Game"

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Game" component={Game} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation