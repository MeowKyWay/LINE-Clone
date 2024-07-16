import Body from './components/Body';
import NavigationBar from './components/navigation/NavigationBar'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import FriendsPage from './pages/friendPage/FriendsPage';
import ChatsPage from './pages/ChatsPage';
import AddFriendsPage from './pages/addFriendPage/AddFriendsPage';
import LoginPage from './pages/authPages/LoginPage';
import RegisterPage from './pages/authPages/RegisterPage'
import ResetPasswordPage from './pages/authPages/ResetPasswordPage';
import { RoutePath } from './RoutePath';
import TestPage from './pages/TestPage';
import FriendRequestSubscription from './components/api/subscription/FriendRequestSubscription';
import FetchUser from './components/api/fetch/FetchUser';
import FetchChats from './components/api/fetch/FetchChats';
import FriendChatSubscription from './components/api/subscription/FriendChatSubscription';

function App() {

  const router = createBrowserRouter([

    {
      path: '/std',
      element: (

        <div className="h-screen w-screen flex flex-row overflow-hidden">
          <NavigationBar />
          <Body>
            <Outlet />
          </Body>
          <FetchUser />
          <FetchChats />          
          <FriendRequestSubscription />
          <FriendChatSubscription />
        </div>


      ),
      children: [
        {
          index: true,
          element: <FriendsPage />

        },
        {
          path: RoutePath.FRIENDS,
          element: <FriendsPage/>
        },
        {
          path: RoutePath.CHATS,
          element: <ChatsPage/>
        },
        {
          path: RoutePath.ADD_FRIENDS,
          element: <AddFriendsPage/>
        },
        {
          path: RoutePath.TEST,
          element: <TestPage />
        }
      ]
    },
    {
      path: '/',
      element: (
        <div className="h-screen w-screen flex flex-row overflow-hidden">
          <Outlet />
        </div>
      ),
      children: [        
        {
          index: true,
          element: <LoginPage />
        },
        {
          path: RoutePath.REGISTER,
          element: <RegisterPage />
        },
        {
          path: RoutePath.LOGIN,
          element: <LoginPage />
        },
        {
          path: RoutePath.RESET_PASSWORD,
          element: <ResetPasswordPage />
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
