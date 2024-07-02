import Body from './components/Body';
import NavigationBar from './components/navigation/NavigationBar'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import FriendsPage from './pages/FriendsPage';
import ChatsPage from './pages/ChatsPage';
import AddFriendsPage from './pages/AddFriendsPage';
import LoginPage from './pages/authPages/LoginPage';
import RegisterPage from './pages/authPages/RegisterPage'
import ResetPasswordPage from './pages/authPages/ResetPasswordPage';
import { RoutePath } from './RoutePath';

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
        </div>


      ),
      children: [
        {
          index: true,
          element: <FriendsPage />
        },
        {
          path: RoutePath.FRIENDS,
          element: <FriendsPage />
        },
        {
          path: RoutePath.CHATS,
          element: <ChatsPage />
        },
        {
          path: RoutePath.ADD_FRIENDS,
          element: <AddFriendsPage />
        },
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
