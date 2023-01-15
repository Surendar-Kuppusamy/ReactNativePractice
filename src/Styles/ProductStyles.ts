import { StyleSheet, Text, View, Button, FlatList, Dimensions } from 'react-native';

export const pStyle = StyleSheet.create({
    container: {
        flex: 1.5,
        //backgroundColor: "#9CCC65",
        marginTop: 25
    },
    searchBlock: {
        flexDirection: "row",
        padding: 10,
        /* width: "95%", */
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center"
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
    rightIcon: {
        right: 15
    },
    productListBlock: {
        padding: 25
    },
    resultCount: {
        color: "#CCC"
    },
    productFlat: {
        padding: 0
    },
    separator: {
        marginVertical: 10
    },
    oddProduct: {
        height: 250,
        width: "45%",
        backgroundColor: "#CCC",
        borderRadius: 25,
        marginLeft: 10
    },
    evenProduct: {
        /* justifyContent: "center",
        alignItems: "center", */
        height: 250,
        width: "45%",
        backgroundColor: "#CCC",
        borderRadius: 25,
        marginRight: 10
    },
    productImage: {
        width: "auto",
        height: 125,
        marginHorizontal: 30,
        marginTop: 10
    },
    productTitle: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10
    },
    productPrice: {
        fontSize: 14,
        textAlign: "center"
    }
});