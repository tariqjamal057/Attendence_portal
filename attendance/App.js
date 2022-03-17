import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Startpage from "./pages/components/Startpage";

export default function App() {
  return (
    <View style={styles.container}>
		<Startpage/>
		<StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
