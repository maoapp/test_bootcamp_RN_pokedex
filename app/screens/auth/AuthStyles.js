import { StyleSheet } from 'react-native';

const AuthStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        flex: 1,
        width: "100%",
        height: 50,
        resizeMode: "contain",
        alignSelf: "center"
    },
    form: {
        flex: 1,
        justifyContent: "center",
        width: "80%"
    },
    inputTextContainer: {
        marginBottom: 5
    },
    inputText: {
        height: 30,
        borderColor: "#BEBEBE",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#428AF8",
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(255,255,255,0.7)"
    },
    buttonText: {
        color: "#FFF",
        textAlign: "center",
        height: 20
    },
    registerButtonText: {
        color: "#FFF",
        textAlign: "center",
        height: 20
    },
    screenHeaderText: {
        color: "#2d132c",
        textAlign: "center",
        height: 40
    },
    buttonEnabled: {
        opacity: 1
    },
    buttonDisabled: {
        opacity: 0.3
    },
    errorText: {
        height: 20,
        color: "#ee4540"
    }
});

export default AuthStyles;