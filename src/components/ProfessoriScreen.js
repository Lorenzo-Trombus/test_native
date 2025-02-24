import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Professori = () => {
  const [professori, setProfessori] = useState([]);
  const [filteredProfessori, setFilteredProfessori] = useState([]); // Professori filtrati
  const [searchTerm, setSearchTerm] = useState(''); // Stato per la ricerca
  const navigation = useNavigation();

  useEffect(() => {
    // Carica il file JSON dal public folder
    fetch('/database.json') // Percorso corretto per il file in public
      .then((response) => response.json())
      .then((data) => {
        // Combina tutti i professori dalle 3 categorie
        const allProfessori = [
          ...data.professori.ordinari,
          ...data.professori.associati,
          ...data.professori.ricercatori,
        ];
        setProfessori(allProfessori); // Imposta i dati dei professori
        setFilteredProfessori(allProfessori); // Imposta i professori filtrati
      })
      .catch((error) => console.error('Errore nel caricamento del database: ', error));
  }, []);

  // Funzione per filtrare i dati in base al termine di ricerca
  useEffect(() => {
    const filtered = professori.filter((item) =>
      `${item.nome} ${item.cognome}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProfessori(filtered);
  }, [searchTerm, professori]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Professori</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Cerca per nome e cognome..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      {/* Intestazioni delle colonne */}
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Nome</Text>
        <Text style={styles.headerText}>Cognome</Text>
        <Text style={styles.headerText}>Materia</Text>
        <Text style={styles.headerText}>Anni di Insegnamento</Text>
        <Text style={styles.headerText}>Dipartimento</Text>
      </View>

      <FlatList
        data={filteredProfessori}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.text}>{item.nome}</Text>
            <Text style={styles.text}>{item.cognome}</Text>
            <Text style={styles.text}>{item.materia}</Text>
            <Text style={styles.text}>{item.anni_insegnamento}</Text>
            <Text style={styles.text}>{item.dipartimento}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.noResults}>Nessun professore trovato.</Text>
        )}
      />

      <Button title="Torna alla Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',  // Colore di sfondo per le intestazioni
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    textAlign: 'center',  // Centra il testo
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',  // Centra il testo
  },
  noResults: {
    textAlign: 'center',
    color: '#999',
  },
});

export default Professori;
