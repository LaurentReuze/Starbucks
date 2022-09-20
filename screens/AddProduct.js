// Librairies
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Platform,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import * as productsActions from "../store/actions/products";

export default function AddProduct(props) {
  // State
  const [productName, setProductName] = useState("");

  //Variable
  const dispatch = useDispatch();

  //Fonction

  const onSubmitPressedhandler = () => {
    // Fermer le clavier
    Keyboard.dismiss();
    // Ajout element dans le store
    dispatch(productsActions.addProduct(productName));
    //Afficher une alerte
    Alert.alert("Produit ajouté", `Le produit "${productName}" a été ajouté`);
    //Vider le champs
    setProductName("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Nom du produit</Text>
        <TextInput
          style={styles.input}
          placeholder="Saisir un produit"
          placeholderTextColor="purple"
          autoCapitalize="words"
          // autoCorrect={false}
          // autoFocus={true}
          // editable={false}
          // keyboardAppearance="dark" // Seulementsur iOs
          // keyboardType="url"
          // maxLength={5}
          // multiline={true}
          value={productName}
          onChangeText={setProductName}
        />
        <TouchableOpacity
          style={styles.submit}
          activeOpacity={0.8}
          onPress={onSubmitPressedhandler}
        >
          <Text style={styles.submitText}>Ajouter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: Dimensions.get("window").width * 0.8,
    elevation: 1,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 50,
  },
  input: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 3,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "ios" ? 10 : 5,
    backgroundColor: "#ecf0f1",
    marginTop: 10,
  },
  label: {
    color: Colors.primary,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  submit: {
    backgroundColor: Colors.primary,
    padding: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: 15,
  },
  submitText: {
    color: "white",
  },
});
