import { Subscription } from 'rxjs'
import { generateClient } from 'aws-amplify/api';
import { onCreateUserFriend } from '../../graphql/subscriptions';

const client = generateClient()

const useAddFriendSubscription = (userID: string , dispatch: (data: string) => void) => {
    const subscription: Subscription = client.graphql({
        query: onCreateUserFriend,
    }).subscribe({
        next: () => {
            dispatch(userID);
        }
    });
    return subscription
};

export { useAddFriendSubscription }