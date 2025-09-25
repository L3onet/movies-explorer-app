import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../utils';

// Datos de ejemplo - en una app real vendrían de una API
const MOVIES_DATA = [
  {
    id: '1',
    title: 'Avatar: The Way of Water',
    year: '2022',
    genre: 'Ciencia Ficción',
    rating: '7.8',
    description: 'Jake Sully vive con su nueva familia en el planeta Pandora...'
  },
  {
    id: '2',
    title: 'Top Gun: Maverick',
    year: '2022',
    genre: 'Acción',
    rating: '8.3',
    description: 'Después de más de 30 años de servicio como uno de los mejores aviadores...'
  },
  {
    id: '3',
    title: 'Black Panther: Wakanda Forever',
    year: '2022',
    genre: 'Superhéroes',
    rating: '6.7',
    description: 'La reina Ramonda, Shuri, M\'Baku, Okoye y las Dora Milaje luchan...'
  },
  {
    id: '4',
    title: 'Jurassic World Dominion',
    year: '2022',
    genre: 'Aventura',
    rating: '5.6',
    description: 'Cuatro años después de la destrucción de Isla Nublar...'
  }
];

export function MoviesListScreen() {
  const navigation = useNavigation();

  const renderMovie = ({ item }) => (
    <TouchableOpacity
      style={styles.movieCard}
      onPress={() => navigation.navigate(screens.movies.movieDetailScreen, { movie: item })}
    >
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text style={styles.movieYear}>{item.year}</Text>
        <Text style={styles.movieGenre}>{item.genre}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>⭐ {item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Cartelera de Películas</Text>
      <FlatList
        data={MOVIES_DATA}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  movieCard: {
    backgroundColor: '#171717',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  movieInfo: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  movieYear: {
    fontSize: 14,
    color: '#999',
    marginBottom: 4,
  },
  movieGenre: {
    fontSize: 14,
    color: '#0891b2',
    marginBottom: 8,
  },
  ratingContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
