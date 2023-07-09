import { View, StyleSheet } from "react-native";
import React from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import { StatusBar } from "expo-status-bar";
import Payment from "./components/Payment";

const App = () => {
  return (
    <View style={styles.container}>
      <StripeProvider
        merchantIdentifier="merchant.identifier"
        publishableKey="pk_test_51MBXXNSHJLr1jwGDmvepcylN5nJA4nHHIOdKhuVzgtVCYQms6zjLAXBhMQn6m5k69S6FXr46hnQHSng1rQO8BNEm00QRiJqfzx"
      >
        <Payment />
      </StripeProvider>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
