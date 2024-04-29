import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

type CabecalhoProps = {
  title: string;
  navigation: NavigationProp<ParamListBase>;
  pagina: string
};

export default function Cabecalho({ title, navigation,pagina }: CabecalhoProps) {
  const { showActionSheetWithOptions } = useActionSheet();

  const options = pagina !== 'Sobre' ? ["Sobre", "Logout", "Cancel"] : ["Logout", "Cancel"];
  const destructiveButtonIndex = pagina !== 'Sobre' ? 1 : 0;
  const cancelButtonIndex =  pagina !== 'Sobre' ? 2 : 1;

  const handleOpen = () => {
    if(pagina !== 'Sobre'){
      showActionSheetWithOptions(
        {
          options,
          cancelButtonIndex,
          destructiveButtonIndex,
        },
        (buttonIndex) => {
          switch (buttonIndex) {
            case 1 :
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
              break;
              case 0 :
                navigation.navigate('Sobre')
                break;
            default:
              break;
          }
        }
      );

    }else{
      showActionSheetWithOptions(
        {
          options,
          cancelButtonIndex,
          destructiveButtonIndex,
        },
        (buttonIndex) => {
          switch (buttonIndex) {
              case 0 :
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Login' }],
                });
                break;
            default:
              break;
          }
        }
      );
    }
  };

  
  return <>
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 ,paddingHorizontal: 20, paddingTop: 40 , maxHeight: 150}}>
      <Text style={{ flex: 1, flexDirection: 'row', justifyContent: 'center',paddingVertical: 30 ,fontSize:40}}>{title}</Text>
      <Ionicons style={{ paddingVertical: 30 }}  name="menu" size={40} color="#0979b0" onPress={handleOpen} />    
    </View>
    <View style={{ borderBottomWidth: 2, borderBottomColor: 'black', width: '100%', marginTop: -2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 5 }} />
  </>;
}
