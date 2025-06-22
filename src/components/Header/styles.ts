import { COLORS } from "@constants";
import { scale } from "@utils/Responsive";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.header,
        flexDirection: 'row',
        height: scale(50),
        alignItems: 'center',
    },
    backImage: { resizeMode: 'contain' },
    spaceStart: { marginStart: scale(20) },
    title: {
        color: COLORS.primaryText,
        flex: 1,
        fontSize: scale(16),
    },
});
