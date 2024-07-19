import { generateClient } from "aws-amplify/api"
import { useEffect, useRef } from "react"
import { Subscription } from "rxjs"
import { onCreateUserFriend } from "../../../graphql/subscriptions";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { addFriendRequest } from "../../../store/slice/friendsSlice";
import { getUser } from "../../../graphql/queries";

function FriendRequestSubscription() {

    const client = generateClient();
    const dispatch = useAppDispatch();

    const user = useAppSelector(state => state.user);
    const subscription = useRef<Subscription | null>(null);

    useEffect(() => {
        if (!user.currentUser || user.error) return;

        if (subscription.current) return;

        const newSubscription = client.graphql({
            query: onCreateUserFriend,
        }).subscribe({
            next: async ({ data }) => {
                console.log(data)
                if (data.onCreateUserFriend?.friendID !== user.currentUser?.lineID) return;
                if (data.onCreateUserFriend?.status !== 'pending') return;
                const friend = await client.graphql({
                    query: getUser,
                    variables: {
                        id: data.onCreateUserFriend.userID
                    }
                })
                dispatch(addFriendRequest(friend.data.getUser));
            }
        })

        subscription.current = newSubscription;

        console.log('Subscribe Friend request')

        return () => {
            if (newSubscription) {
                newSubscription.unsubscribe();
                subscription.current = null;
            }
            console.log('Unsubscribe Friend request')
        };

    }, [client, dispatch, user.currentUser, user.error]);

    return (
        <div className="hidden" />
    );
}

export default FriendRequestSubscription