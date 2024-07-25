import Modal from "../modal/Modal";
import { useAppDispatch, useAppSelector } from "../../hook";
import ProfileSetting from "./ProfileSetting";
import { setAccountModalState, setSettingModalState } from "../../store/slice/statesSlice";
import AccountProfile from "./AccountProfile";


function ProfileModal(){

    const dispatch = useAppDispatch();

    const settingModalState = useAppSelector(state => state.states.settingModalState);

    const onClose = () => {
        dispatch(setAccountModalState(null))
        dispatch(setSettingModalState(false))
    }

    return (
        <Modal onClose={onClose} label={"profile page"} height={"516px"} width={"312px"}>
            { settingModalState? <ProfileSetting/> : <AccountProfile/> }
        </Modal>
    )
}

export default ProfileModal;