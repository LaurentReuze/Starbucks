import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Informations(props) {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Service Consommateurs</Text>
        <View>
          <View style={styles.contact}>
            <Ionicons name="call-outline" size={35} color={Colors.primary} />
            <Text style={styles.informations}>8033</Text>
          </View>
          <View style={styles.contact}>
            <Ionicons name="mail-outline" size={35} color={Colors.primary} />
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL("mailto:toto@me.com")}
            >
              <Text style={{ ...styles.informations, fontSize: 16 }}>
                toto@me.com
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View style={styles.button}>
            <Ionicons name="close" size={23} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textTransform: "uppercase",
    fontSize: 17,
    color: Colors.primary,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
  contact: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    width: 190,
  },
  informations: { fontWeight: "bold", fontSize: 30 },
});
