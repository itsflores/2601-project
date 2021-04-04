import React from "react";
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  ScrollView,
  Linking,
} from "react-native";
import { AppStyles } from "./Styles";

const ImageModal = ({ image, handleClose }) => (
  <View style={Modal.container}>
    <View style={Modal.card}>
      <Image
        source={{ uri: image.urls.regular }}
        style={[Modal.image, { aspectRatio: image.width / image.height }]}
      />
      <View style={Modal.info}>
        <ScrollView>
          <Text>{image.user.username}</Text>
        </ScrollView>
      </View>
      <View style={Modal.actions}>
        <Text
          onPress={() => Linking.openURL(image.links.html)}
          style={[AppStyles.buttonText, { color: "black", marginRight: 12 }]}
        >
          open in unsplash
        </Text>
        <TouchableHighlight
          style={AppStyles.button}
          onPress={() => handleClose()}
        >
          <Text style={AppStyles.buttonText}>done</Text>
        </TouchableHighlight>
      </View>
    </View>
  </View>
);

const Modal = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    zIndex: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "90%",
    height: "85%",
    backgroundColor: "white",
    elevation: 12,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 12,
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  info: {
    flex: 1,
    width: "100%",
  },
  image: {
    width: "100%",
  },
});

export default ImageModal;
