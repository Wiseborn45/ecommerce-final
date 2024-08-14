import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [Password, setpassword] = useState("");
  const navigation = useNavigation();
  const handleLogin = () => {
    const user = {
      email: email,
      password: Password,
    };

    axios
      .post("http://172.20.10.4:8000/api/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.replace("Home");
      })
      .catch((error) => {
        Alert.alert("Login Error", "Invalid Email");
        console.log(error);
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
            Login In to your Account
          </Text>
        </View>

        <View style={{ marginTop: 60 }}>
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
            <EvilIcons
              style={{ marginleft: 8 }}
              name="lock"
              size={24}
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
          onPress={handleLogin}
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
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Don't have an account? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
