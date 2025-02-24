import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Corsi = () => {
  const corsi = [
    { id: '1', nome: 'Psicologia', descrizione: 'Corso introduttivo alla psicologia' },
    { id: '2', nome: 'Fisica', descrizione: 'Studio delle leggi fisiche' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Corsi</Text>

      <FlatList
        data={corsi}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.corsoNome}>{item.nome}</Text>
            <Text>{item.descrizione}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  corsoNome: {
    fontWeight: 'bold',
  },
});

export default Corsi;
