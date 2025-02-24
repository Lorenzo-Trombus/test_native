import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrdinariScreen = () => {
  const [professoriOrdinari, setProfessoriOrdinari] = useState([]);
  const [filteredProfessori, setFilteredProfessori] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Stato per la ricerca
  const navigation = useNavigation();

  useEffect(() => {
    // Carica il file JSON dal server (cartella public)
    fetch("/database.json")  // Assicurati che il percorso sia corretto
      .then((response) => response.json())
      .then((data) => {
        setProfessoriOrdinari(data.professori.ordinari); // Imposta i professori ordinari
        setFilteredProfessori(data.professori.ordinari); // Imposta i professori ordinari filtrati
      })
      .catch((error) => console.error("Errore nel caricamento del database: ", error));
  }, []);

  // Funzione di ricerca per nome e cognome
  useEffect(() => {
    const filtered = professoriOrdinari.filter((item) =>
      `${item.nome} ${item.cognome}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProfessori(filtered);
  }, [searchTerm, professoriOrdinari]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Professori Ordinari</Text>

      {/* Campo di ricerca */}
      <TextInput
        style={styles.input}
        placeholder="Cerca per nome e cognome..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />

      {/* Lista dei professori */}
      <FlatList
        data={filteredProfessori}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>Nome: {item.nome}</Text>
            <Text style={styles.cardText}>Cognome: {item.cognome}</Text>
            <Text style={styles.cardText}>Materia: {item.materia}</Text>
            <Text style={styles.cardText}>Anni di Insegnamento: {item.anni_insegnamento}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nessun professore trovato.</Text>
        }
      />

      {/* Pulsante per tornare alla Home */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Torna alla Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f4f4f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    color: "#333",
  },
  emptyText: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4f71df",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 30,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OrdinariScreen;
