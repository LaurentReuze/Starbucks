// Librairies
import React from "react";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";

// Composants
import HeaderButton from "../components/UI/HeaderButton/HeaderButton";
import DrawerContentScreen from "../screens/drawer/DrawerContentScreen";

// Ecrans
import HomeScreen from "../screens/Home";
import PlacesScreen from "../screens/Places";
import informationScreen from "../screens/Informations";
import AddProductScreen from "../screens/AddProduct";

// Variable
const headerOptions = {
  headerTintColor: Platform.OS === "ios" ? Colors.primary : "white",
  headerStyle: {
    backgroundColor: Platform.OS === "ios" ? "transparent" : Colors.primary,
    borderColor: Colors.primary,
    borderBottomWidth: 1,
  },
};

// MainStackNavigator
const MainStackNavigatorComponent = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStackNavigatorComponent.Navigator>
      <MainStackNavigatorComponent.Screen
        name="Home"
        component={HomeScreen}
        options={(props) => ({
          title: "Accueil",
          ...headerOptions,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Places"
                iconName="information-circle-outline"
                onPress={() => props.navigation.navigate("Informations")}
              />
            </HeaderButtons>
          ),
          // headerShown: false,
        })}
      />
      <MainStackNavigatorComponent.Screen
        name="Places"
        component={PlacesScreen}
        options={{
          title: "Les salons Starbucks",
          ...headerOptions,
        }}
      />
    </MainStackNavigatorComponent.Navigator>
  );
};

//ModalStackNavigator
const ModalStackNavigatorComponent = createStackNavigator();
const ModalStackNavigator = () => {
  return (
    <ModalStackNavigatorComponent.Navigator mode="modal">
      <ModalStackNavigatorComponent.Screen
        name="Main"
        component={MainStackNavigator}
        options={{ headerShown: false }}
      />
      <ModalStackNavigatorComponent.Screen
        name="Informations"
        component={informationScreen}
        options={{ headerShown: false }}
      />
    </ModalStackNavigatorComponent.Navigator>
  );
};

// PlacesStackNavigator

const PlacesStackNavigatorComponent = createStackNavigator();

const PlacesStackNavigator = () => {
  return (
    <PlacesStackNavigatorComponent.Navigator>
      <PlacesStackNavigatorComponent.Screen
        name="Places"
        component={PlacesScreen}
        options={({ navigation }) => ({
          title: "Salons",
          ...headerOptions,
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Drawer"
                iconName="menu"
                onPress={() => {
                  navigation.dispatch(DrawerActions.toggleDrawer);
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </PlacesStackNavigatorComponent.Navigator>
  );
};

// AddProductStackNavigator
const AddProductStackNavigatorComponent = createStackNavigator();
const AddProductStackNavigator = () => {
  return (
    <AddProductStackNavigatorComponent.Navigator>
      <AddProductStackNavigatorComponent.Screen
        name="Add Product"
        component={AddProductScreen}
        options={({ navigation }) => ({
          title: "Proposer un produit",
          ...headerOptions,
        })}
      />
    </AddProductStackNavigatorComponent.Navigator>
  );
};

// AppTabNavigator
const TabNavigator = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "TabHome") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "TabPlaces") {
            iconName = focused ? "location" : "location-outline";
          } else if (route.name === "TabAddProduct") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        // inactiveTintColor: Colors.primaryFaded,
        // activeBackgroundColor: 'blue',
        // inactiveBackgroundColor: 'red',
      }}
      // initialRouteName="TabPlaces"
    >
      <TabNavigator.Screen
        name="TabHome"
        component={ModalStackNavigator}
        options={{ title: "Accueil" }}
      />
      <TabNavigator.Screen
        name="TabPlaces"
        component={PlacesStackNavigator}
        options={{ title: "Salons" }}
      />
      <TabNavigator.Screen
        name="TabAddProduct"
        component={AddProductStackNavigator}
        options={{ title: "New Product" }}
      />
    </TabNavigator.Navigator>
  );
};

// AppDrawerNavigator
const DrawerNavigator = createDrawerNavigator();

export const AppDrawerNavigator = () => {
  return (
    <DrawerNavigator.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
      drawerContent={(props) => <DrawerContentScreen {...props} />}
      screenOptions={{ swipeEnabled: false }}
      // drawerPosition="right"
      // openByDefault={true}
      drawerType="slide"
    >
      <DrawerNavigator.Screen
        name="DrawerApp"
        component={AppTabNavigator}
        options={{
          title: "Accueil",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

// Drawer
// Tab
// Stack
