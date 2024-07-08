import Modal from "../../components/Modal/Modal";

function AddFriendModal({ onClose }: {
    onClose: () => void
}) {
    return (
        <Modal onClose={onClose} label="Friend search" height="486px" width="312px">
            Test
        </Modal>
    )
}

export default AddFriendModal;