import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#FFAB91",
        paddingTop: 30
    },
    block1: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#90CAF9",
        padding: 15,
        /* fontSize: 15,
        alignSelf: "flex-start",
        flex: 1 */
    },
    block2: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#AB47BC",
        padding: 15,
        /* fontSize: 15,
        alignSelf: "center",
        flex: 1 */
    },
    block3: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#D81B60",
        padding: 15,
        /* fontSize: 15,
        alignSelf: "flex-end",
        flex: 1 */
    },
    block4: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#9E9D24",
        padding: 15,
        /* fontSize: 15,
        alignSelf: "flex-end",
        flex: 1 */
    },
    subBlock11: {
        flex: 1,
        backgroundColor: "#4CAF50",
        padding: 5
    },
    subBlock12: {
        flex: 3,
        //alignItems: "flex-end",
        //alignSelf:"flex-end",
        backgroundColor: "#F48FB1",
        padding: 5,
        position: "absolute",
        top: 0,
        right: 0,
        width: 200
    },
    subBlock21: {
        flex: 2,
        backgroundColor: "#FFEA00",
        padding: 5
    },
    subBlock22: {
        flex: 2,
        backgroundColor: "#E3F2FD",
        padding: 5
    },
    subBlock31: {
        flex: 2,
        backgroundColor: "#039BE5",
        padding: 5
    },
    subBlock32: {
        flex: 1,
        backgroundColor: "#616161",
        padding: 5
    },
    subBlock41: {
        flex: 1,
        backgroundColor: "#311B92",
        padding: 5
    },
    subBlock42: {
        flex: 1,
        backgroundColor: "#D50000",
        padding: 5
    },
});

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFAB91",
        flexDirection: "column",
        justifyContent: "flex-start",
        //alignItems: "flex-start",
        //alignContent: "center",
        //alignSelf: "center",
        //flexWrap: "wrap",
        paddingTop: 30
    },
    block1: {
        backgroundColor: "#90CAF9",
        padding: 15,
        fontSize: 15,
        alignSelf: "flex-start",
        //alignContent: "flex-end",
        flex: 1
    },
    block2: {
        backgroundColor: "#AB47BC",
        padding: 15,
        fontSize: 15,
        alignSelf: "center",
        flex: 1
    },
    block3: {
        backgroundColor: "#D81B60",
        padding: 15,
        fontSize: 15,
        alignSelf: "flex-end",
        flex: 1
    },
    block4: {
        backgroundColor: "#9E9D24",
        padding: 15,
        fontSize: 15,
        alignSelf: "flex-end",
        flex: 1
    },
    subBlock1: {
        backgroundColor: "#4CAF50",
        //alignContent: "flex-end",
        padding: 5,
        flex: 1
    },
    subBlock2: {
        backgroundColor: "#F48FB1",
        padding: 25
    },
    subBlock3: {
        backgroundColor: "#FFCDD2",
        flex: 1
    },
    subBlock4: {
        backgroundColor: "#78909C",
        flex: 1
    }
});