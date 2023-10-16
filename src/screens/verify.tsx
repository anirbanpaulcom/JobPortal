import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon1 from '../assets/svg/jobicon.png'
import icon2 from '../assets/svg/Vector.png'

export default function VerificationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIconContainer}>
          <Image source={icon2} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Verification</Text>
        </View>
      </View>

      <View style={styles.emailContainer}>
        <Text>We've sent you the verification code on</Text>
        <Text style={styles.emailText}>Chaitanygoyal49@gmail.com</Text>
      </View>

      <View style={styles.verificationCodeContainer}>
        <TextInput placeholder="___" style={styles.verificationCodeInput} />
        <TextInput placeholder="___" style={styles.verificationCodeInput} />
        <TextInput placeholder="___" style={styles.verificationCodeInput} />
        <TextInput placeholder="___" style={styles.verificationCodeInput} />
      </View>

      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>

      <View style={styles.resendText}>
        <Text>Re-send code in 0:20</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 75,
    margin: 25,
    marginVertical: 5,
  },
  headerIconContainer: {
    width: "10%",
    padding: 10,
    borderRadius: 5,
    borderColor: "#747688",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTextContainer: {
    width: "90%",
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: '#1C2340',
    fontSize: 24,
    fontWeight: "500",
  },
  emailContainer: {
    width: "100%",
    height: 50,
  },
  emailText: {
    fontWeight: "400",
    color: '#1C2340',
    padding: 5,
  },
  verificationCodeContainer: {
    width: "100%",
    marginVertical: 40,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  verificationCodeInput: {
    borderColor: "#747688",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  doneButton: {
    width: 330,
    height: 55,
    backgroundColor: "#FF900E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
  },
  doneButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  resendText: {
    marginVertical: 20,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
