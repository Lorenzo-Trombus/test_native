import { StyleSheet } from 'react-native';

// Esempio di stile migliorato
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    padding: 20,
  },
  header: {
    backgroundColor: '#00274d',  // colore istituzionale (blu scuro)
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
  },
  subtitle: {
    fontSize: 20,
    color: '#c5c5c5',
    fontFamily: 'Roboto-Regular',
  },
  searchInput: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    color: '#333',
    marginVertical: 5,
    fontFamily: 'Roboto-Regular',
  },
  button: {
    backgroundColor: '#0066cc',  // Blu, colore universitario
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 50,
    alignItems: 'center',
  },
});
