// education.tsx

import { View, Text, StyleSheet } from "react-native";

export default function Education() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Riwayat Pendidikan</Text>

      <View style={styles.card}>
        <Text style={styles.degree}>Sarjana Manajemen Informatika</Text>
        <Text style={styles.institution}>Universitas Gajah Mada</Text>
        <Text style={styles.duration}>2022 - 2026</Text>
        <Text style={styles.description}>
          Mempelajari berbagai aspek pengembangan perangkat lunak, ilmu komputer, dan teknologi informasi. Berfokus pada pemrograman, algoritma, dan struktur data.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.degree}>SMK Swasta GKPS 1</Text>
        <Text style={styles.institution}>Jurusan Akuntansi</Text>
        <Text style={styles.duration}>2019 - 2022</Text>
        <Text style={styles.description}>
          Memperdalam pelajaran dasar dasar akuntansi, akuntansi keuangan, audit, pajak.
        </Text>
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
  degree: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  institution: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  duration: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});