import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Associato = () => {
  const [associati, setAssociati] = useState([]);
  const [filteredAssociati, setFilteredAssociati] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState(""); // Stato per la ricerca
  const navigation = useNavigation();

  useEffect(() => {
    // Usa fetch per caricare il file JSON dalla cartella pubblica
    fetch("/database.json") // il percorso corretto per la cartella public
      .then((response) => response.json())
      .then((data) => {
        setAssociati(data.professori.associati); // Imposta i professori associati
        setFilteredAssociati(data.professori.associati); // Imposta i professori associati filtrati
      })
      .catch((error) => console.error("Errore nel caricamento del database: ", error));
  }, []);

  // Funzione di ordinamento
  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredAssociati].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredAssociati(sortedData);
  };

  // Funzione di ricerca per nome e cognome
  useEffect(() => {
    const filtered = associati.filter((item) =>
      `${item.nome} ${item.cognome}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAssociati(filtered);
  }, [searchTerm, associati]);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.text}>{item.nome}</Text>
      <Text style={styles.text}>{item.cognome}</Text>
      <Text style={styles.text}>{item.materia}</Text>
      <Text style={styles.text}>{item.anni_insegnamento}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Professori Associati</Text>

      {/* Campo di ricerca per nome e cognome */}
      <TextInput
        style={styles.searchInput}
        placeholder="Cerca per nome o cognome..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />

      {/* Intestazioni delle colonne */}
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Nome</Text>
        <Text style={styles.headerText}>Cognome</Text>
        <Text style={styles.headerText}>Materia</Text>
        <Text style={styles.headerText}>Anni di Insegnamento</Text>
      </View>

      <View style={styles.tableContainer}>
        <FlatList
          data={filteredAssociati}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>Nessun professore trovato.</Text>
          }
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Torna alla Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",  // Colore di sfondo per le intestazioni
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
    textAlign: "center",  // Centra il testo
  },
  tableContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  text: {
    fontSize: 16,
    textAlign: "center",  // Centra il testo
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Associato;
