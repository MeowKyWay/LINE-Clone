import { generateClient } from "aws-amplify/api"
import { useEffect, useRef } from "react"
import { Subscription } from "rxjs"
import { onCreateChat } from "../../../graphql/subscriptions";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { addChat } from "../../../store/slice/chatsSlice";

function FriendChatSubscription() {

    const client = generateClient();
    const dispatch = useAppDispatch();

    const user = useAppSelector(state => state.user);
    const subscription = useRef<Subscription | null>(null);

    useEffect(() => {
        if (!user.currentUser || user.error) return;

        if (subscription.current) return;

        const newSubscription = client.graphql({
            query: onCreateChat,
            variables: {
                filter: {
                    userID: {
                        eq: user.currentUser?.lineID
                    }
                }
            }
        }).subscribe({
            next: ({ data }) => {
                dispatch(addChat(data.onCreateChat));
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

    }, [client, dispatch, user.currentUser, user.error]);

    return (
        <div className="hidden" />
    );
}

export default FriendChatSubscription