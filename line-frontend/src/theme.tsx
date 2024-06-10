import { ReactNode, createContext, useContext, useState } from "react";

export interface Theme {
    color: {
        primary: {
            background: string;
            text: string;
            icon: string;
            line: string;
            field: string;
            unreadBubble: string;
            circleColor: string;
            inputBorderColor: string;
        },
        secondary: {
            background: string;
            text: string;
            icon: string;
            line: string;
        },
        tertiary: {
            background: string;
            text: string;
            icon: string;
        },

    }

}

const theme: {light:Theme, dark:Theme} = {
    light: {
        color: {
            primary: {
                background: '#ffffff',
                text: '#000000',
                icon: '#6e7993',
                line: '#d2d8dc',
                field: '#f5f5f5',
                unreadBubble: '#00b046',
                circleColor: '#efefef',
                inputBorderColor: '#dfdfdf'
            },
            secondary: {
                background: '#1d2a45',
                text: '#000000',
                icon: '#ffffff',
                line: '#e9e9e9'
            },
            tertiary: {
                background: '#f7f7f7',
                text: '#b7b7b7',
                icon: '#838faa',
            },

        }
    },
    dark: {
        color: {
            primary: {
                background: '#2d2e30',
                text: '#dfdfdf',
                icon: '#777777',
                line: '#4a4a4a',
                field: '#4a4a4a',
                unreadBubble: '#00b046',
                circleColor: '#3b3c3f',
                inputBorderColor: '#616161'
            },
            secondary: {
                background: '#1f1f1f',
                text: '#373737',
                icon: '#dfdfdf',
                line: '#37383a',
            },
            tertiary: {
                background: '#343536',
                text: '#949494',
                icon: '#949494',
            },

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