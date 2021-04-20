import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    globalPadding: {
        padding: 15,
    }
})

export const globalScreen = StyleSheet.create({
    whiteCenter: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    login: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    imgLogo: {
        width: 150,
        height: 150,
        position: 'absolute',
        borderRadius: 75,
    },
    icons: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 15,
    }
})