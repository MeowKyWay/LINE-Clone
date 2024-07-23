import { generateClient } from "aws-amplify/api"
import { useEffect, useRef } from "react"
import { Subscription } from "rxjs"
import { onCreateChat, onUpdateChat } from "../../../graphql/subscriptions";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { addChat, updateChat } from "../../../store/slice/chatsSlice";

function FriendChatSubscription() {

    const client = generateClient();
    const dispatch = useAppDispatch();

    const user = useAppSelector(state => state.user);
    const createSubscription = useRef<Subscription | null>(null);
    const updateSubscription = useRef<Subscription | null>(null);

    useEffect(() => {
        if (!user.currentUser || user.error) return;

        if (createSubscription.current) return;

        const newSubscription = client.graphql({
            query: onCreateChat,
        }).subscribe({
            next: ({ data }) => {
                const chat = {
                    ...data.onCreateChat,
                    message: {
                        items: []
                    },
                }
                dispatch(addChat(chat));
                console.log(chat)
            }
        })

        createSubscription.current = newSubscription;

        console.log('Subscribe to Create Friend chat')

        return () => {
            if (newSubscription) {
                newSubscription.unsubscribe();
                createSubscription.current = null;
            }
            console.log('Unsubscribe to Create Friend chat')
        };

    }, [client, dispatch, user.currentUser, user.error]);

    useEffect(() => {
        if (!user.currentUser || user.error) return;

        if (updateSubscription.current) return;

        const newSubscription = client.graphql({
            query: onUpdateChat,
        }).subscribe({
            next: ({ data }) => {
                dispatch(updateChat({
                    id: data.onUpdateChat.id,
                    updateAt: data.onUpdateChat.updatedAt
                }));
            }
        })

        updateSubscription.current = newSubscription;

        console.log('Subscribe to Update Friend chat')

        return () => {
            if (newSubscription) {
                newSubscription.unsubscribe();
                updateSubscription.current = null;
            }
            console.log('Unsubscribe to Update Friend chat')
        };
    }, [client, dispatch, user.currentUser, user.error]);

    return (
        <div className="hidden" />
    );
}

export default FriendChatSubscription