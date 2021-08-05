import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row', // para deixar alinhado,
        alignItems: 'center'
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.line,
    },
    icon: {
        width: 24,
        height: 18
    },
    title: {
        flex: 1, // flex: 1, com paddingHorizontal: 50 que esta em styles.ts deixa botao no meio
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center'     
    },
});