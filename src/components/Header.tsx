import useTheme from "../theme";
import { ReactNode } from "react";
import { setChatFolderState } from "../store/slice/statesSlice";
import { useAppDispatch, useAppSelector } from "../hook";

function Header() {

    const theme = useTheme().currentTheme;

    const dispatch = useAppDispatch();

    const chatFolderState = useAppSelector(state => state.states.chatFolderState);

    const style = {
        backgroundColor: theme.color.primary.background,
        borderColor: theme.color.secondary.line,
    }

    const folder = {
        color: theme.color.tertiary.text,
        fontSize: '13px',
    }

    const folderActivated = {
        color: theme.color.primary.text,
        fontSize: '13px',
        borderBottomWidth: '2px',
        borderColor: theme.color.primary.text,
        boxSizing: 'border-box'
    }

    const name = ['All', 'Friends', 'Groups'];

    const renderFolders = name.map((name) => {
        return (
            <button
                className="mx-3 h-full"
                style={(name === chatFolderState) ? folderActivated : folder}
                key={name}
                onClick={() => dispatch(setChatFolderState(name))}>
                {name}
            </button>
        )
    }) as ReactNode

    return (
        <div className="min-h-12 h-12 border-box border-b" style={style}>
            <div className="size-full flex flex-row items-center justify-flex-start">
                {renderFolders}
            </div>
        </div>
    )
}

export default Header;