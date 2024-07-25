import { generateClient } from "aws-amplify/api"
import { useEffect, useRef } from "react"
import { Subscription } from "rxjs"
import { onCreateChat, onUpdateChat } from "../../../graphql/subscriptions";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { addChat, updateChat } from "../../../store/slice/chatsSlice";
import { Chat } from "../../../API";

function FriendChatSubscription() {

    const client = generateClient();
    const dispatch = useAppDispatch();

    const user = useAppSelector(state => state.user);
    const createSubscription = useRef<Subscription | null>(null);
    const updateSubscription = useRef<Subscription | null>(null);

    const friends = useAppSelector(state => state.friends.friends.data);

    useEffect(() => {
        if (!user.currentUser || user.error) return;
        if (!friends) return;

        if (createSubscription.current) return;

        const newSubscription = client.graphql({
            query: onCreateChat,
        }).subscribe({
            next: ({ data }) => {
                console.log(data);
                
                const chat = {
                    ...data.onCreateChat,
                    friend: friends?.find(friend => friend.id === data.onCreateChat.friendID),
                    message: {
                        items: [],
                        __typename: 'ModelMessageConnection',
                    },
                } as Chat;
                dispatch(addChat(chat));
                // console.log(chat)
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

    }, [client, dispatch, user.currentUser, user.error, friends]);

    useEffect(() => {
        if (!user.currentUser || user.error) return;

        if (updateSubscription.current) return;

        const newSubscription = client.graphql({
            query: onUpdateChat,
        }).subscribe({
            next: ({ data }) => {
                dispatch(updateChat({
                    id: data.onUpdateChat.id,
                    lastReadTime: data.onUpdateChat.lastReadTime,
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