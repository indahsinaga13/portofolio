// experience.tsx

import { View, Text, StyleSheet } from "react-native";

export default function Experience() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Work Experience</Text>

      <View style={styles.card}>
        <Text style={styles.jobTitle}>Front Office</Text>
        <Text style={styles.company}>Kantor Catatan Sipil</Text>
        <Text style={styles.duration}>Maret 2021</Text>
        <Text style={styles.description}>
          Mengembangkan dan memelihara aplikasi mobile dan web. Bekerja sama dengan tim desain dan pemangku kepentingan untuk menghasilkan solusi perangkat lunak berkualitas tinggi.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.jobTitle}>web developer</Text>
        <Text style={styles.company}>Telkom</Text>
        <Text style={styles.duration}>mei 2017 - Des 2020</Text>
        <Text style={styles.description}>
          Membantu pengembangan proyek klien, termasuk aplikasi mobile dan situs web. Berpartisipasi dalam peninjauan kode dan meningkatkan kualitas kode.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.jobTitle}>Praktek kerja lapangan</Text>
        <Text style={styles.company}>Front Office.</Text>
        <Text style={styles.duration}>maret - mei 2020</Text>
        <Text style={styles.description}>
          Bekerja membantu pegawai Negeri sipil membuat dokumen warga.
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
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  company: {
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