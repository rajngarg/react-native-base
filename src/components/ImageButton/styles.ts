import { StyleSheet } from "react-native";
import { scale } from "@utils/Responsive";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scale(40),
        height: scale(40),
    },
    image: {
        resizeMode: 'contain',
        width: scale(20),
        height: scale(20),
    },
});
