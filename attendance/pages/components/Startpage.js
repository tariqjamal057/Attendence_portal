import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Startpage() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <Text style={styles.text1}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi officiis, maxime voluptatum corporis magni neque temporibus et aliquid nobis eum sapiente illum reiciendis, eveniet ea reprehenderit quaerat! Deleniti, cupiditate facere?</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'yellow',
        alignItems: "center",
        justifyContent: 'center',
    },
    text: {
        color: 'red',
    },
    text1: {
        color: '#000',
    },
});
