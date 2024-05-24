import { useDispatch, useSelector } from "react-redux";
import useTheme from "../theme";
import { StoreType } from "../store";
import { ReactNode } from "react";
import { setChatFolderState } from "../store/slice/statesSlice";

function Header() {

    const theme = useTheme().currentTheme;

    const dispatch = useDispatch();

    const chatFolders = useSelector((state: StoreType) => state.user.currentUser.chatFolders);
    const chatFolderState = useSelector((state: StoreType) => state.states.chatFolderState);

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
    chatFolders.map((folder) => {
        name.push(folder.name);
    });

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