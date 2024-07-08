import AddFriendsPageButton from "./AddFriendsPageButton";
import { MdPeopleAlt, MdPersonSearch } from "react-icons/md";
import FriendRequestsList from "./FriendRequestsList";
import AddFriendModal from "./AddFriendModal";
import { useState } from "react";

function AddFriendsPage() {

    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            {showModal && <AddFriendModal onClose={() => setShowModal(false)}/>}
            <div className="flex flex-col w-full pt-7.5" >
                <AddFriendsPageButton label="Friend search" onClick={() => setShowModal(true)}>
                    <MdPersonSearch />
                </AddFriendsPageButton>
            </div>
            <div className="flex flex-col w-full" >
                <AddFriendsPageButton label="Create a group" onClick={() => {}}>
                    <MdPeopleAlt />
                </AddFriendsPageButton>
            </div>

            <div className="flex-1 flex flex-col w-full overflow-y-scroll" style={{ maxHeight: 'calc(100vh - 170px)' }}>
                <FriendRequestsList />
            </div>
        </div>

    )
}

export default AddFriendsPage;