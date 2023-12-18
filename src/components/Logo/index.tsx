import React from "react";
import { View, Image } from "react-native";
import logo from "../../assets/logo.png";

import { styles } from "./styles";

export function Logo() {
  return (
    <View >
      <Image source={logo} style={styles.logo}/>
    </View>
  );
}
