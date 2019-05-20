import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ToastAndroid
} from "react-native";

class personalInfo extends Component {
  state = {
    name: {
      placeHolder: "Nombre Completo",
      text: "",
      backgroundColor: "white",
      validInputColor: "#EBFFE4",
      invalidInputColor: "#FFE4E4",
      validated: false
    },
    email: {
      placeHolder: "Email",
      text: "",
      backgroundColor: "white",
      validInputColor: "#EBFFE4",
      invalidInputColor: "#FFE4E4",
      validated: false
    },
    location: {
      placeHolder: "Ubicación",
      text: "",
      backgroundColor: "white",
      validInputColor: "#EBFFE4",
      invalidInputColor: "#FFE4E4",
      validated: false
    }
  };

  //Validates if name is not empty
  validateName = () => {
    if (this.state.name.text !== "") {
      this.setState({ name: (this.state.name.validated = true) }); //Set true validated
      this.setColorNameValidation(true); //changes the color of text input
    } else {
      this.setState({ name: (this.state.name.validated = false) }); //Set false validated
      this.setColorNameValidation(false); //changes the color of text input
    }
  };

  validatesEmail = () => {
    let validator = require("email-validator");
    let email = this.state.email;
    if (validator.validate(email.text)) {
      this.setState({ email: (this.state.email.validated = true) });
      this.setColorEmailValidation(true);
    } else {
      this.setState({ email: (this.state.email.validated = false) });
      this.setColorEmailValidation(false);
    }
  };

  validateLocation = () => {
    if (this.state.location.text !== "") {
      this.setState({ location: (this.state.location.validated = true) });
      this.setColorLocationValidation(true);
    } else {
      this.setState({ location: (this.state.location.validated = false) });
      this.setColorLocationValidation(false);
    }
  };
  //Set the name into the name state
  handleNameText(nameUser) {
    let name = { ...this.state.name };
    name.text = nameUser;
    this.setState({ name });
  }

  handleEmailText(emailUser) {
    let email = { ...this.state.email }; //Copy of the object in state, this is for updating nested states
    email.text = emailUser;
    this.setState({ email });
  }
  handleLocationText(locationUser) {
    let location = { ...this.state.location };
    location.text = locationUser;
    this.setState({ location });
  }

  //Color text input depending on validation
  setColorNameValidation(isValid) {
    let name = { ...this.state.name };
    isValid === true
      ? (name.backgroundColor = name.validInputColor)
      : (name.backgroundColor = name.invalidInputColor);
    this.setState({
      name
    });
  }
  setColorEmailValidation(isValid) {
    let email = { ...this.state.email };
    isValid === true
      ? (email.backgroundColor = email.validInputColor)
      : (email.backgroundColor = email.invalidInputColor);
    this.setState({
      email
    });
  }

  setColorLocationValidation(isValid) {
    let location = { ...this.state.location };
    isValid === true
      ? (location.backgroundColor = location.validInputColor)
      : (location.backgroundColor = location.invalidInputColor);
    this.setState({
      location
    });
  }

  //displayed when save button is clicked
  saveActionButton = () => {
    if (
      this.state.name.validated == true &&
      this.state.email.validated == true &&
      this.state.location.validated == true
    ) {
      ToastAndroid.show("Datos guardados correctamente.", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Error en alguno de los datos.", ToastAndroid.SHORT);
    }
  };

  render() {
    return (
      <View>
        <TextInput
          style={[
            styles.inputText,
            { backgroundColor: this.state.name.backgroundColor }
          ]}
          placeholder={this.state.name.placeHolder}
          onChangeText={text => this.handleNameText(text)}
          onBlur={this.validateName}
        />
        <TextInput
          style={[
            styles.inputText,
            { backgroundColor: this.state.email.backgroundColor }
          ]}
          placeholder={this.state.email.placeHolder}
          keyboardType="email-address"
          onChangeText={text => this.handleEmailText(text)}
          onBlur={this.validatesEmail}
        />
        <TextInput
          style={[
            styles.inputText,
            { backgroundColor: this.state.location.backgroundColor }
          ]}
          placeholder={this.state.location.placeHolder}
          onChangeText={text => this.handleLocationText(text)}
          onBlur={this.validateLocation}
        />
        <View style={styles.viewButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.saveActionButton}
          >
            <Text style={styles.buttonTextStyle}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default personalInfo;

const styles = StyleSheet.create({
  inputText: {
    margin: 5,
    borderRadius: 10,
    paddingLeft: 15,

    borderTopColor: "#F0F0F0",
    borderTopWidth: 0.5,

    borderLeftColor: "#F0F0F0",
    borderLeftWidth: 0.8,

    borderRightColor: "#E1E1E1",
    borderRightWidth: 1,

    borderBottomColor: "#E1E1E1",
    borderBottomWidth: 2
  },

  viewButton: {
    marginTop: 40,
    marginLeft: 25,
    marginRight: 25,
    height: 50,
    alignItems: "center"
  },

  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "#90E0DB",
    width: 150,
    height: 40,
    borderRadius: 10
  },

  buttonTextStyle: {
    color: "white",
    fontSize: 15
  }
});
