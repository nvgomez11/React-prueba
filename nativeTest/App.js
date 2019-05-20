/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import MainHeader from "./Components/mainHeader";
import ImageUser from "./Components/imageUser";
import PersonalInfo from "./Components/personalInfo";

export default class App extends Component {
  state = {
    titleText: "Datos Personales",
    headerTitle: "Perfil"
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <MainHeader />
        <ScrollView>
          <View style={styles.viewStyle}>
            <View style={styles.viewImage}>
              <Text style={styles.titleStyle}>{this.state.titleText}</Text>
              <ImageUser
                style={styles.imageStyle}
                source={this.state.imgSource}
              />
            </View>
            <View style={styles.viewInfo}>
              <PersonalInfo style={styles.personalInfoStyle} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white"
  },

  viewImage: {
    alignItems: "center",
    marginTop: 5
  },

  viewInfo: {
    marginTop: 30,
    height: 300,
    width: 250
  },

  titleStyle: {
    fontFamily: "roboto",
    fontWeight: "bold",
    textAlign: "center",
    margin: 15
  }
});
