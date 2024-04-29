import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";

type Car = {
    id: number;
    brand: string;
    model: string;
    year: number;
};

type PropsCardDeCarros = {
    carros: Car[];
};

export default function CardDeCarros({ carros }: PropsCardDeCarros) {
    const carrosAgrupados = carros.reduce((acc: any, curr: Car) => {
        const marca = curr.brand;
        if (!acc[marca]) {
            acc[marca] = [];
        }
        acc[marca].push(curr);
        return acc;
    }, {});

    const secoes = Object.keys(carrosAgrupados).map((marca) => ({
        title: marca,
        data: carrosAgrupados[marca],
    }));

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Carros a Venda</Text>
            <SectionList
                sections={secoes}
                keyExtractor={(item, index) => item.id.toString() + index}
                renderItem={({ item,index ,section }) => (
                    <View style={[styles.carroContainer, 
               index === 0 ? styles.firstCar : null,
               index === section.data.length - 1 ? styles.lastCar : null]}>
                        <Text style={styles.textoCarros}>{item.model}</Text>
                        <Text style={styles.textoCarros}>{item.year}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '600',
        padding: 30
    },
    header: {
        backgroundColor: "#0979b0",
        padding: 10,
        borderRadius: 15,
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center'
    },
    carroContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 5,
        borderEndWidth: 1,
        borderStartWidth: 1, 
        borderBottomColor: "grey",
    },
    firstCar: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopWidth: 1,
        borderTopColor: "grey",
      },
      lastCar: {
        borderBottomWidth: 1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomColor: "grey",
        marginBottom: 20
      },
    textoCarros: {
        fontSize: 16,
        padding: 5
    }
});
