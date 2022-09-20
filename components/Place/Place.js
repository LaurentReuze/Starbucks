import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Colors from "../../constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import * as placesActions from "../../store/actions/places";

export default function Place(props) {
  // Variable
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => dispatch(placesActions.deleteStore(props.item.id))}
    >
      <View style={styles.card}>
        <ImageBackground source={props.item.store} style={styles.backGround}>
          <View style={styles.informations}>
            <Text style={styles.location}>{props.item.location}</Text>
            <Text style={styles.country}>{props.item.country}</Text>
          </View>
        </ImageBackground>
        <View style={styles.contact}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${props.item.phoneNumber}`)}
          >
            <Text style={styles.phone}>{props.item.phoneNumber}</Text>
          </TouchableOpacity>
          <Ionicons name="call" size={15} color={Colors.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "flex-end",
  },
  location: {
    fontSize: 17,
    color: "white",
  },
  country: {
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Montserrat-Black",
    color: "white",
  },
  phone: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginRight: 10,
    color: Colors.primary,
  },
  backGround: {
    width: "100%",
    height: 170,
  },
  informations: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 15,
    backgroundColor: "rgba(0,0,0, .4)",
  },
});
