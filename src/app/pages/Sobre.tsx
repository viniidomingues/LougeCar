import React from "react";
import HeaderWithTitle from "../../components/headers/Cabecalho";
import InformacoesSobre from "../../components/containers/Sobre";

export default function Sobre({navigation}) {
  return (
    <>
    <HeaderWithTitle title="LougeCar" navigation={navigation} pagina="Sobre" />
    <InformacoesSobre navigation={navigation} />
    </>
  );
}

