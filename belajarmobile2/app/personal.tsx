// personal.tsx

import { View, Text, StyleSheet } from "react-native";

export default function Personal() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Personal Details</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Indah Sinaga</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>Jl. Salam Bahagia 3 No. 310</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>19</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>indahramayasianaga@gmail.com</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>+62 823 7017 0413</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0E627C',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});