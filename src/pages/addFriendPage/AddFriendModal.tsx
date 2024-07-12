import { useState } from "react";
import Modal from "../../components/modal/Modal";
import SearchField from "../../components/input/SearchField";
import useTheme from "../../theme";
import Button from "../../components/input/Button";
import { User } from "../../API";
import { searchUserByUsername } from "../../utilities/APIUtils";
import { useAppDispatch, useAppSelector } from "../../hook";
import { addFriend } from "../../store/thunks/friendsThunk";
import ProfilePicture from "../../components/ProfilePicture";

function AddFriendModal({ onClose }: {
    onClose: () => void
}) {

    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user);

    const [friend, setFriend] = useState<User | null>(null);
    const [userNotFound, setUserNotFound] = useState(false)

    const errorMessage = useAppSelector((state) => state.friends.error);

    const theme = useTheme().currentTheme;

    const [searchTerm, setSearchTerm] = useState("");


    const handleSearchFriend = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user = await searchUserByUsername(searchTerm);
        if (user) {
            setFriend(user);
            setUserNotFound(false)
        }
        else {
            setUserNotFound(true)
        }
    }

    const handleAddFriend = async () => {
        await dispatch(addFriend(friend?.id as string));
        onClose()
    }

    return (
        <Modal onClose={onClose} label="Friend search" height="486px" width="312px">
            <div
                className="flex flex-col size-full items-center"
                style={{
                    color: theme.color.primary.text,
                }}>
                <div className="h-12 w-full px-3 flex flex-row items-center">
                    <span className="text-sm">LINE ID</span>
                </div>
                <form onSubmit={(e) => handleSearchFriend(e)}>
                    <SearchField
                        height="28px"
                        width="296px"
                        placeholder="Search by ID"
                        value={searchTerm}
                        onChange={(value: string) => setSearchTerm(value)}
                        round
                    >
                    </SearchField>
                </form>


                <div className="flex-1 w-full flex flex-col items-center justify-center">

                    {(friend && !userNotFound) && (
                        <div className="flex flex-col items-center gap-y-1">
                            <ProfilePicture src={friend.image} size="94px"></ProfilePicture>
                            <span className="text-xl">{friend.name}</span>
                            <span className="text-xs">{friend.statusMessage}</span>
                            <span className="text-red-500 text-xs font-light">{errorMessage}</span>
                            {
                                friend.id === user.currentUser?.lineID ?
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="text-xs text-gray-400">You can't add yourself as a friend.</div>
                                        <Button type="disabled" className="text-sm w-22 h-7.5" onClick={handleAddFriend}>Add</Button>
                                    </div>
                                    :

                                    <div>
                                        <Button type="primary" className="text-sm w-22 h-7.5" onClick={handleAddFriend}>Add</Button>
                                    </div>
                            }
                        </div>
                    )}
                    {
                        (userNotFound) && (
                            <div>
                                <span className="text-sm">User not found.</span>
                                <div>
                                    <Button type="primary" onClick={onClose} className="w-22 h-8 mt-2">OK</Button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </Modal>
    )
}

export default AddFriendModal;