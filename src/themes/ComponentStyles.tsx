import { StyleSheet } from "react-native";

export const cardStyle = StyleSheet.create({
    linearGradient: {
      flex: 1,
    },
    loginCard: {
        borderWidth: 0.5,
        borderColor: '#fff',
        width: 350,
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingTop: 100,
        paddingBottom: 20,
    },
    loginInput: {
        backgroundColor: '#fff',
        marginVertical: 10,
        position: 'absolute',
        width: '100%',
        paddingLeft: 50,
    },
    buttonLogin: {
        width: '100%',
        backgroundColor: '#283593',
        marginVertical: 10,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtonLogin: {
        fontSize: 20,
        color: '#E8EAF6',
    }
  })


 export const uiKiten = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
  });
  

 export const switchStyles = StyleSheet.create({
    container: {
      alignItems: "flex-start",
      justifyContent: "center",
      width: 600
    }
  });
  