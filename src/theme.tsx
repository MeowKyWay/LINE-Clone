import { ReactNode, createContext, useContext, useState } from "react";

export interface Theme {
    color: {
        primary: {
            background: string;
            modal: string;
            modalHover: string;
            text: string;
            icon: string;
            line: string;
            field: string;
            button: string;
            buttonDisabled: string;
            unreadBubble: string;
            circleColor: string;
            inputBorderColor: string;
            error: string;
        },
        secondary: {
            background: string;
            text: string;
            icon: string;
            line: string;
            button: string;
        },
        tertiary: {
            background: string;
            text: string;
            icon: string;
        },
        chatBubble: {
            background: string;
            text: string;
            inputChat: string;
        }

    }

}

const theme: {light:Theme, dark:Theme} = {
    light: {
        color: {
            primary: {
                background: '#ffffff',
                modal: '#ffffff',
                modalHover: '#fafafa',
                text: '#000000',
                icon: '#6e7993',
                line: '#d2d8dc',
                field: '#f5f5f5',
                button: '#00b81c',
                buttonDisabled: '#c8c8c8',
                unreadBubble: '#00b046',
                circleColor: '#efefef',
                inputBorderColor: '#dfdfdf',
                error: "#ff0000",
            },
            secondary: {
                background: '#1d2a45',
                text: '#000000',
                icon: '#ffffff',
                line: '#e9e9e9',
                button: '#969696',
            },
            tertiary: {
                background: '#f7f7f7',
                text: '#b7b7b7',
                icon: '#838faa',
            },
            chatBubble: {
                background: "#efefef",
                text: "#1f1f1f",
                inputChat: "#ececec"
            }

        }
    },
    dark: {
        color: {
            primary: {
                background: '#2d2e30',
                modal: '#3f3f3f',
                modalHover: '#454545',
                text: '#dfdfdf',
                icon: '#777777',
                line: '#4a4a4a',
                field: '#4a4a4a',
                button: '#00b81c',
                buttonDisabled: '#c8c8c8',
                unreadBubble: '#00b046',
                circleColor: '#3b3c3f',
                inputBorderColor: '#616161',
                error: "#ff0000",
            },
            secondary: {
                background: '#1f1f1f',
                text: '#373737',
                icon: '#dfdfdf',
                line: '#37383a',
                button: '#969696',
            },
            tertiary: {
                background: '#343536',
                text: '#949494',
                icon: '#949494',
            },
            chatBubble: {
                background: "#555555",
                text: "#dfdfdf",
                inputChat: "#37383a"
            }

        }
    }
}

const ThemeContext = createContext({
    currentTheme: theme.light,
    toggle: () => { },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [currentTheme, setCurrentTheme] = useState(theme.dark);

    const toggle = () => {
        if (currentTheme === theme.light) {
            setCurrentTheme(theme.dark);
            return;
        }
        setCurrentTheme(theme.light);
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default function useTheme() {
    return useContext(ThemeContext);
}