import React from "react";
import HeaderWithTitle from "../../components/headers/Cabecalho";
import CardDeCarros from "../../components/containers/CardDeCarros";
import data from "../../services/data";

export default function Home({navigation}) {
  return (
    <>
    <HeaderWithTitle title="LougeCar" navigation={navigation} pagina="Home"/>
    <CardDeCarros  carros={data}/>
    </>
  );
}

