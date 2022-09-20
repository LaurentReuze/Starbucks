// Librairies
import React from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

// Composant
import Place from "../components/Place/Place";

function Places(props) {
  //Variable
  const places = useSelector((state) => state.places.places);

  return (
    <View>
      <FlatList
        data={places}
        renderItem={({ item }) => <Place item={item} />}
        style={{ width: "100%" }}
      />
    </View>
  );
}

export default Places;
