import type { ReactNode } from "react";
import { createContext, useContext } from "react";
import type {
    StyleProp,
    ViewProps,
    ViewStyle,
} from "react-native";
import {
    StatusBar,
    StyleSheet,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView, KeyboardAwareScrollViewProps } from "react-native-keyboard-controller";
import { Header } from "@components";

const WrapperContext = createContext({
    variant: "fixed",
});

type WrapperProps = ViewProps & {
    variant?: "fixed" | "scroll";
    barStyle?: "light-content" | "dark-content";
    safeAreaTop?: boolean;
    safeAreaBottom?: boolean;
};

const Wrapper = ({
    variant = "fixed",
    barStyle = "dark-content",
    children,
    safeAreaTop = true,
    safeAreaBottom = false,
    ...rest
}: WrapperProps) => {
    const areaInsets = useSafeAreaInsets();
    return (
        <WrapperContext.Provider value={{ variant }}>
            <StatusBar
                barStyle={barStyle}
                translucent
                backgroundColor="transparent"
            />
            <View
                style={{
                    flex: 1,
                    paddingTop: safeAreaTop ? areaInsets.top : 0,
                    paddingBottom: safeAreaBottom ? areaInsets.bottom : 0,
                }}
                {...rest}
            >
                {children}
            </View>
        </WrapperContext.Provider>
    );
};

type WrapperContainerProps = ViewProps &
    KeyboardAwareScrollViewProps & {
        style?: StyleProp<ViewStyle>;
        children?: ReactNode;
    };
const WrapperBody = ({
    style,
    children,
    ...rest
}: WrapperContainerProps) => {
    const { variant } = useContext(WrapperContext);
    return variant === "fixed" ? (
        <View
            style={StyleSheet.flatten([styles.container, style])}
            {...rest}
        >
            {children}
        </View>
    ) : (
        <KeyboardAwareScrollView
            style={StyleSheet.flatten([styles.container, style])}
            showsVerticalScrollIndicator={false}
            {...rest}
        >
            {children}
        </KeyboardAwareScrollView>
    );
};

Wrapper.Header = Header;
Wrapper.Body = WrapperBody;

export default Wrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        height: "100%",
    },
});
