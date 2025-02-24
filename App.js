import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/HomeScreen';
import Associato from './src/components/AssociatoScreen';
import RicercatoriScreen from './src/components/RicercatoriScreen';
import Professori from './src/components/ProfessoriScreen';
import Corsi from './src/components/CorsiScreen';
import OrdinariScreen from './src/components/OrdinariScreen';
import { styles } from './src/components/styles'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Associato" component={Associato} />
        <Stack.Screen name= "Ordinario" component= {OrdinariScreen}/>
        <Stack.Screen name="Ricercatore" component={RicercatoriScreen} />
        <Stack.Screen name="Professori" component={Professori} />
        <Stack.Screen name="Corsi" component={Corsi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;