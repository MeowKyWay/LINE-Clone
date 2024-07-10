import { generateClient } from 'aws-amplify/api';
import { onCreateUserFriend } from '../../graphql/subscriptions';
import { OnCreateUserFriendSubscription } from '../../API';

const client = generateClient()

const friendRequestSubscription = (userID: string, onUpdate: (data: OnCreateUserFriendSubscription) => void) => {
    const subscription = client.graphql({
        query: onCreateUserFriend,
        variables: {
            filter: {
                friendID: {
                    eq: userID
                }
            }
        }
    }).subscribe({
        next: ({ data }) => {
            onUpdate(data);
        }
    });
    return subscription
};

export { friendRequestSubscription }