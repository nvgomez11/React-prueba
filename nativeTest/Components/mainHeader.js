import React, { Component } from "react";
import { Header } from "react-native-elements";

class mainHeader extends Component {
  state = {};
  render() {
    return (
      <Header
        containerStyle={{
          backgroundColor: "white",
          height: 60
        }}
        leftComponent={{
          icon: "menu",
          color: "black",
          onPress: () => alert("Menú hamburguesa")
        }}
        centerComponent={{
          text: "Perfil",
          style: { color: "black", fontWeight: "bold" }
        }}
      />
    );
  }
}

export default mainHeader;
