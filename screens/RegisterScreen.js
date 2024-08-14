import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';




const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [Password, setpassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = {
        name: name,
        email: email,
        password: Password,
    };

    //send a Post request to the backend API to register the user
    axios
    .post("http://172.20.10.4:8000/api/register", user)
    .then((response) => {
        console.log(response.data);
        Alert.alert(
            "Registration successful",
            "You have been registered Successfully"
        );
        setName("");
        setEmail("");
        setpassword("");
    })
    .catch((error) => {
        Alert.alert(
            "Registration Error",
            "An error occurred while registering"
        );
        console.log("registration failed", error);
    });
};
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image
          source={require("../assets/tucee.png")}
          style={{ width: 205, height: 130, marginTop: 10 }}
        />
      </View>

      <KeyboardAvoidingView style>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 28,
              color: "#041E41",
            }}
          >
            Register to your Account
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={{ marginTop: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <Ionicons
                style={{ marginLeft: 8 }}
                name="person"
                size={24}
                color="gray"
              />

              <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: name ? 16 : 16,
                }}
                placeholder="enter your name"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="enter your Email"
            />
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <EvilIcons
              style={{ marginLeft: 6 }}
              name="lock"
              size={28}
              color="gray"
            />

            <TextInput
              value={Password}
              onChangeText={(text) => setpassword(text)}
              secureTextEntry={true}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: Password ? 16 : 16,
              }}
              placeholder="enter your Password"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Keep me Logged in</Text>

          <Text style={{ color: "#007fff", fontWeight: "500" }}>
            Forgot Password
          </Text>
        </View>

        <View style={{ marginTop: 55 }} />

        <Pressable
          onPress={handleRegister}
          style={{
            width: 200,
            backgroundColor: "#FF5733",
            borderRadius: 6,
            // marginleft: "auto",
            // marginRight: "auto",
            padding: 15,
            marginLeft: 65,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontweight: "bold",
            }}
          >
            Register
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Already have an account? Sign in
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
