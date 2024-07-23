import { generateClient } from "aws-amplify/api"
import { useEffect, useRef } from "react"
import { Subscription } from "rxjs"
import { onCreateMessage } from "../../../graphql/subscriptions";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { addMessage } from "../../../store/slice/chatsSlice";

function MessageSubscription() {

    const client = generateClient();
    const dispatch = useAppDispatch();

    const user = useAppSelector(state => state.user);
    const subscription = useRef<Subscription | null>(null);

    useEffect(() => {
        if (!user.currentUser || user.error) return;

        if (subscription.current) return;

        const newSubscription = client.graphql({
            query: onCreateMessage,
            variables: {
                filter: {
                    chatID: {
                        contains: user.currentUser?.lineID
                    }
                }
            }
        }).subscribe({
            next: ({ data }) => {
                dispatch(addMessage(data.onCreateMessage));
            }
        })

        subscription.current = newSubscription;

        console.log('Subscribe to Message')

        return () => {
            if (newSubscription) {
                newSubscription.unsubscribe();
                subscription.current = null;
            }
            console.log('Unsubscribe to Message')
        };

    }, [client, dispatch, user.currentUser, user.error]);

    return (
        <div className="hidden" />
    );
}

export default MessageSubscription