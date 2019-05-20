import React, { Component } from "react";
import { Image } from "react-native";
import { genericTypeAnnotation } from "@babel/types";

class imageUser extends Component {
  state = {
    url: "https://s3.amazonaws.com/kairos-media/team/Ben_Virdee-Chapman.jpeg"
  };

  render() {
    return (
      <Image
        style={{
          width: 160,
          height: 160,
          overflow: "hidden",
          borderRadius: 100,
          borderWidth: 1,
          borderColor: "#00FFDC"
        }}
        source={{
          uri: this.state.url
        }}
      />
    );
  }
}

export default imageUser;
