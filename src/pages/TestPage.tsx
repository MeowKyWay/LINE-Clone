//For testing

import useTheme from "../theme";

function TestPage() {

    const theme = useTheme().currentTheme;

    return (
        <div
            className="flex flex-col items-center"
            style={{
                color: theme.color.primary.text,
            }}
        >
        </div>
    )
}

export default TestPage;