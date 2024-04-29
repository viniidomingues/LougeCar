import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import React from "react";

export default function InformacoesSobre({ navigation }) {
    const handleOpenLink = () => {
        const url = "https://github.com/viniidomingues/LougeCar.git";
        Linking.openURL(url);
    };

    return (
        <View style={styles.container}>
            <View style={styles.cardInfos}>
                <Text style={styles.titulo}>LougeCar</Text>
                <Text style={styles.paragrafo}>Versão 1.0</Text>
                <View style={styles.cardInfosPessoal}>
                    <Text style={styles.paragrafo}>Desenvolvido por</Text>
                    <Text style={styles.autor}>Vinicius pereira</Text>
                    <TouchableOpacity onPress={handleOpenLink}>
                        <Text style={styles.link}>Link do Projeto</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        alignContent: 'center',
        borderColor: "black",
        borderRadius: 4,
        padding: 8,
        width: "100%",
    },
    titulo: {
        fontSize: 35,
        alignItems: 'center',
        paddingTop: 100,
        borderRadius: 4,
        fontWeight: '700',
        padding: 8,
    },
    autor: {
        fontSize: 35,
        alignItems: 'center',
        borderRadius: 4,
        fontWeight: '700',
        padding: 8,
    },
    paragrafo: {
        fontSize: 25,
        borderRadius: 4,
        padding: 8,
    },
    cardInfos: {
        marginTop: '10%',
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 5,
        
        borderWidth: 1,
        borderBottomColor: "grey",
    },
    cardInfosPessoal: {
        flexDirection: "column",
        alignItems: "center",
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 120,
        borderBottomColor: "grey",
    },
    link: {
        color: "blue",
        textDecorationLine: "underline",
        fontSize: 25,
    },
});
