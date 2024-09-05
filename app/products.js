import { Text, ScrollView, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";


export default function Products() { /**/

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Nossas receitas de Cookies
            </Text>

            <View style={styles.container}>
                    <View style={styles.itemContainer}>
                        <Image source={require('../assets/images/Cookies/CookieClassico.png')} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.titleProduct}>Cookie Classico</Text>
                            <Text style={styles.description}>Receita de Cookies Simples: Aprenda agora a fazer essa deliciosa receita de cookies simples, fácil e rápida. O resultado final será difícil de resistir! Experimente agora!</Text>
                        </View>
                    </View>
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        color: '#fff',
        fontSize: 24, 
    },
    scrollView: {
        backgroundColor: '#f5f5f5',
    },
    container: {
        width: "100%",
        /*justifyContent: "space-around",*/
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
    },
    itemContainer: {
        borderRadius: 10,
        height: 320,
        width: 200,
        marginVertical: 25,
        backgroundColor: "#fff",
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    textContainer: {
        marginLeft: 10,
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
    },
});