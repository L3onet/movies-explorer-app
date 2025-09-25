import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MoviesListScreen, MovieDetailScreen } from "../screens/Movies";
import { screens } from "../utils";
import { styles } from "./Styles.styles";

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles,
      }}
    >
      <Stack.Screen
        name={screens.movies.moviesListScreen}
        component={MoviesListScreen}
        options={{ 
          headerShown: false,
          title: "Películas" 
        }}
      />
      
      <Stack.Screen
        name={screens.movies.movieDetailScreen}
        component={MovieDetailScreen}
        options={{ 
          headerShown: false,
          title: "Detalles" 
        }}
      />
    </Stack.Navigator>
  );
}
