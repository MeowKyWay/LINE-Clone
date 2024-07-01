import Body from './components/Body';
import NavigationBar from './components/NavigationBar'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import FriendsPage from './pages/FriendsPage';
import ChatsPage from './pages/ChatsPage';
import AddFriendsPage from './pages/AddFriendsPage';
import LoginPage from './pages/authPages/LoginPage';
import RegisterPage from './pages/authPages/RegisterPage'
import ResetPasswordPage from './pages/authPages/ResetPasswordPage';

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
          path: '/std/friends',
          element: <FriendsPage />
        },
        {
          path: '/std/chats',
          element: <ChatsPage />
        },
        {
          path: '/std/add-friends',
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
          path: '/register',
          element: <RegisterPage />
        },
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '/resetPassword',
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
