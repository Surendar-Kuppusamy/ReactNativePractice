import { StyleSheet, Text, View, Button, FlatList, Dimensions } from 'react-native';

export const rStyle = StyleSheet.create({
    container: {
        flex: 1.5,
        backgroundColor: "#9CCC65",
        //padding: 25
    },
    searchBox: {
        backgroundColor: "#f3f6f8"
    },

    location: {
        flex: 1.5,
        //backgroundColor: "#78909C"
    },
    header: {
        flex: 2,
        //backgroundColor: "#8D6E63",
        justifyContent: "center"
    },
    form: {
        flex: 3,
        //backgroundColor: "#FF7043"
    },
    buttons: {
        flex: 3,
        //backgroundColor: "#FFA726"
    },
    locationText: {
        flex: 1,
        //backgroundColor: "#26C6DA",
        flexDirection: "row",
        alignItems: "center",
    },
    locationName: {
        fontSize: 12,
        paddingHorizontal: 10
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: "bold"
    },
    headerHint: {
        fontSize: 12
    },
    formLabel: {
        fontSize: 12
    },
    formInputBox: {
        //backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: "center",
        
    },
    formInputField: {
        /* flexDirection: "row",
        alignItems: "center",
        padding: 5, */
        width: Dimensions.get('window').width - 85,
        height: 45,
        elevation: 1,
        shadowColor: "#eee",
        //paddingVertical: 20

    },
    formInput: {
        fontWeight: "bold",
        //width: 200
    },
    formIcon: {
        position: "absolute",
        right: 20
    },
    formEmail: {
        flex: 0.5,
        justifyContent: "flex-start"
    },
    formPassword: {
        flex: 1,
        //backgroundColor: "#FFF",
        justifyContent: "flex-start"
    },
    buttonSignup: {
        flex: 1,
        //backgroundColor: "#E91E63",
        paddingVertical: 5
        
    },
    buttonFacebook: {
        flex: 1,
        justifyContent: "flex-end",
        //backgroundColor: "#673AB7",
        paddingVertical: 5
    },
    buttonSignupBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#C6AB59",
        marginHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 8
        
    },
    buttonSignupBtnIcon: {
        position: "absolute",
        right: 5
    },
    buttonSignupBtnText: {
        fontSize: 12,
        color: "#FFF"
    },
    buttonSignupBtnHint: {
        fontSize: 12,
        paddingTop: 20,
        alignSelf: "center",
        fontWeight: "normal"
    },
    buttonSignupBtnTxt: {
        fontWeight: "bold"
    },
    buttonFacebookBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3C79E6",
        marginHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 8
    },
    buttonFacebookBtnIcon: {
        position: "absolute",
        left: 5     
    }
});