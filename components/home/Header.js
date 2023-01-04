import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { firebase } from "../../firebase";

const Header = ({ navigation }) => {
  return (
    <View style={styles.conatiner}>
      <TouchableOpacity
        onPress={() => {
          try {
            firebase.auth().signOut();
            console.log("SignOut Sucessfully");
            navigation.navigate("LoginScreen");
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        <Image style={styles.logo} source={require("../../assets/insta.png")} />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("NewPostScreen")}>
          <FontAwesome
            name="plus-square-o"
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>9</Text>
          </View>
          <FontAwesome5
            name="facebook-messenger"
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  conatiner: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 5,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 30,
  },
  unreadBadge: {
    backgroundColor: "red",
    position: "absolute",
    left: 10,
    bottom: 15,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});
export default Header;
