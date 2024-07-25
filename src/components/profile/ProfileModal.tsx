import Modal from "../modal/Modal";
import { useAppDispatch, useAppSelector } from "../../hook";
import ProfileSetting from "./ProfileSetting";
import { setAccountModalState } from "../../store/slice/statesSlice";
import AccountProfile from "./AccountProfile";


function ProfileModal(){

    const dispatch = useAppDispatch();

    const settingModalState = useAppSelector(state => state.states.settingModalState);

    return (
        <Modal onClose={() => dispatch(setAccountModalState(null))} label={"profile page"} height={"516px"} width={"312px"}>
            { settingModalState? <ProfileSetting/> : <AccountProfile/> }
        </Modal>
    )
}

export default ProfileModal;