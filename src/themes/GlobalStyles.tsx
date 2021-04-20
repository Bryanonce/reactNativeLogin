import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    globalPadding: {
        padding: 15,
    }
})

export const globalScreen = StyleSheet.create({
    loading: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgLogo: {
        width: 150,
        height: 150,
        position: 'absolute'
    }
})