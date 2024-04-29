import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
} from "react-native";

type FormButtonProps = {
  title: string;
  backgroundImage: any;
} & TouchableOpacityProps;

export default function FormButton({ title, backgroundImage, ...rest }: FormButtonProps) {
  return (
    <TouchableOpacity style={styles.loginButton} {...rest}>
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    width: 300,
    height: 100,
    marginTop: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', 
  },
  imageBackground: {
    width: '100%',
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  title: {
    fontWeight: "bold",
    color: 'white',
  },
});
