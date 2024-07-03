//For testing

import { generateClient } from "aws-amplify/api";
import useTheme from "../theme";

function TestPage() {

    const theme = useTheme().currentTheme;
    
    const client = generateClient();

    return (
        <div 
            className="flex flex-col items-center"
            style={{
                color: theme.color.primary.text,
            }}
        >
            <h1>Test Page</h1>
        </div>
    )
}

export default TestPage;