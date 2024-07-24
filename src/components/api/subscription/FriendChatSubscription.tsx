import { generateClient } from "aws-amplify/api"
import { useEffect, useRef } from "react"
import { Subscription } from "rxjs"
import { onCreateChat } from "../../../graphql/subscriptions";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { addChat } from "../../../store/slice/chatsSlice";
import { Chat } from "../../../API";

function FriendChatSubscription() {

    const client = generateClient();
    const dispatch = useAppDispatch();

    const user = useAppSelector(state => state.user);
    const subscription = useRef<Subscription | null>(null);

    const friends = useAppSelector(state => state.friends.friends.data);

    useEffect(() => {
        if (!user.currentUser || user.error) return;
        if (!friends) return;

        if (subscription.current) return;

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

        subscription.current = newSubscription;

        console.log('Subscribe Friend chat')

        return () => {
            if (newSubscription) {
                newSubscription.unsubscribe();
                subscription.current = null;
            }
            console.log('Unsubscribe Friend chat')
        };

    }, [client, dispatch, user.currentUser, user.error, friends]);

    return (
        <div className="hidden" />
    );
}

export default FriendChatSubscription