import React, { useContext, useState } from "react";
import Screen from "../components/Screen";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { AuthContext } from "../utils/aunthContext";

function Login() {
  console.log("login Screen");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const aunthContext = useContext(AuthContext);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome Back! , Please Login to Proceed
        </Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="you@example.com"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="enter password"
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.button} onPress={aunthContext.logIn}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
  },
  screen: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 24,
    alignSelf: "center",
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    marginTop: 12,
    marginBottom: 6,
    color: "#333",
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
