import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Testimonios(props) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.imagen} 
        source={props.imagen} 
        accessible={true} 
        accessibilityLabel={`Imagen de ${props.nombre}`} 
      />
      <View style={styles.textoContainer}>
        <Text style={styles.nombre}>
          {props.nombre} en {props.pais}
        </Text>
        <Text style={styles.cargo}>
          {props.cargo}
        </Text>
        <Text style={styles.texto}>
          {props.texto}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    minHeight: 250,
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imagen: {
    width: "100%",
    height: 250,
    flex: 2,
    resizeMode: "cover",
  },
  textoContainer: {
    flex: 2,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  nombre: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
    marginBottom: 5,
  },
  cargo: {
    fontWeight: "bold", 
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 10,
  },
  texto: {
    fontSize: 14,
    color: "#333",
    textAlign: "justify",
  },
});
