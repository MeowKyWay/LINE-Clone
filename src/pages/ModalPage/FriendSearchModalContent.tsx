import { ChangeEvent, useState } from "react";
import Modal from "../../components/Modal";
import { TiDelete } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import ProfilePicture from "../../components/ProfilePicture";
import { User } from "../../API";
import { getUser } from "../../graphql/queries";
import { generateClient } from "aws-amplify/api";
import { useAppDispatch } from "../../hook";
import { addFriend } from "../../store/thunks/friendsThunk";


interface FriendSearchModalProps {
    showModal: boolean;
    onClose: () => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

function FriendSearchModalContent({ onClose, searchTerm, setSearchTerm }: FriendSearchModalProps) {

    const [user , setUser] = useState<User>()
    const [userNotFound , setUserNotFound] = useState('')


    const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    const client = generateClient()
    const dispatch = useAppDispatch()



    async function fetchUser(){
        const response = await client.graphql({
            query: getUser,
            variables: {
                id: searchTerm
            }
        })
        const user = response.data.getUser;
        setUser(user as User)
        if(user === null){
            setUserNotFound("User not found.")
            console.log(userNotFound)
        }
    
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        fetchUser()
    }

    const handleAddFriend = async () => {
        try {
            dispatch(addFriend(user?.id as string))
            onClose()
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <Modal onClose={onClose} top={"4rem"} right={"36rem"} bottom={"4rem"} left={"36rem"}>
            <div className="h-full">
                <div className="w-full h-12 text-white text-sm flex items-center justify-center text-center" style={{ backgroundColor: "#2d3649" }}>
                    Friend search
                    <button onClick={onClose} className="text-black absolute right-4 font-bold" style={{ color: "#5b6887" }}>
                        x
                    </button>
                </div>
                <div className="w-full h-24 flex items-center justify-center" style={{ backgroundColor: "#eef2f5" }}>
                    <IoSearch className="relative left-6" style={{ color: "#b2b5bf" }}></IoSearch>
                    <form onSubmit={handleSubmit}>
                            <input
                                value={searchTerm}
                                onChange={handleSearchTermChange}
                                placeholder="Search by ID"
                                className="bg-white text-xs pl-7 h-8 focus:outline-none"
                                
                            ></input>
                    </form>
                    {searchTerm && (
                        <button onClick={() => setSearchTerm("")} className="absolute right-6">
                            <TiDelete className="relative" size="20px" style={{ color: "#b2b5bf" }}></TiDelete>
                        </button>
                    )}
                </div>
                <div className="flex flex-col items-center justify-center" style={{height: "356px"}}>
                    { user && (
                    <><ProfilePicture size={"128px"}></ProfilePicture><div className="flex flex-col items-center">
                            <div className="mt-2">{user.name}</div>
                            <div className="mt-2">{user.statusMessage}</div>
                        </div><div className="flex flex-row space-x-4 mt-4">
                                <button className="text-white text-sm rounded-md px-8 py-2" style={{ backgroundColor: "#1fc04f" }} onClick={handleAddFriend}>Add</button>
                                <button className="border text-sm rounded-md px-6 py-2" style={{ color: "#b2b5bf" }}>Cancel</button>
                            </div></>
                    )}
                    {/* {
                        userNotFound && (
                            <div>
                                {userNotFound}
                                <div>
                                    <button  className="text-white text-sm rounded-md px-8 py-2" style={{ backgroundColor: "#1fc04f" }}>OK</button>
                                </div>
                            </div>
                        )
                    } */}
                </div>
            </div>
        </Modal>
    );
}

export default FriendSearchModalContent;
