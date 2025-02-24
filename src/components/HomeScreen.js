import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from './Cards';  // Assicurati che il percorso sia corretto

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Benvenuto nell'Accademia</Text>
        <Text style={styles.subtitle}>Seleziona una sezione</Text>

        <View style={styles.cardContainer}>
          <Card
            title="Professori Ordinari"
            text="Guarda l'elenco dei professori ordinari"
            path="Ordinario"
          />

          <Card
            title="Professori"
            text="Guarda l'elenco dei professori"
            path="Professori"
          />

          <Card
            title="Professori Associati"
            text="Guarda l'elenco dei professori associati"
            path="Associato"
          />

          <Card
            title="Ricercatori"
            text="Guarda l'elenco dei ricercatori"
            path="Ricercatore"
          />

          <Card
            title="Corsi"
            text="Guarda l'elenco dei corsi"
            path="Corsi"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#f1f8ff', // Sfondo grigio chiaro
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#003366',           // Blu scuro, colore istituzionale
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    color: '#555',              // Colore più chiaro per il sottotitolo
    marginBottom: 25,
    fontStyle: 'italic',
  },
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',           // Disposizione a griglia
    justifyContent: 'space-between', // Distribuisce lo spazio tra le card
    gap: 20,                    // Spaziatura tra le card
    paddingBottom: 30,          // Distanza dal fondo
  },
  card: {
    width: '45%',               // Imposta una larghezza per ogni card (adatta per la griglia)
    marginBottom: 20,           // Spazio tra le righe
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default Home;
