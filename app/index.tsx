import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={style.container}>
      <Image
      style={style.tinylogo}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png', 
      }}/>
      <Text style={style.Textname}>
        Rebecca Max
      </Text>
      <Text style={style.Textdesc}>Lorem Ipsum</Text>
      <Link href="/experience">Experience</Link>
    </View >
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "crimson",
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",

  },
  Textname: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",

  },

  Textdesc: {
    fontSize: 12,
    color: 'white',
  },
})