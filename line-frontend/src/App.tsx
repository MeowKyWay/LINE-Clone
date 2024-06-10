import Body from './components/Body';
import NavigationBar from './components/NavigationBar'
import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import FriendsPage from './pages/FriendsPage';
import ChatsPage from './pages/ChatsPage';
import AddFriendsPage from './pages/AddFriendsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import ResetPasswordPage from './pages/ResetPasswordPage';

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
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
          path: '/friends',
          element: <FriendsPage />
        },
        {
          path: '/chats',
          element: <ChatsPage />
        },
        {
          path: '/add-friends',
          element: <AddFriendsPage />
        },
      ]
    },
    {
      path: '/register',
      element: (
        <div className="h-screen w-screen flex flex-row overflow-hidden">
          <Outlet />
        </div>
      ),
      children: [
        {
          index: true,
          element: <RegisterPage />
        }
      ]
    },
    {
      path: '/login',
      element: (
        <div className="h-screen w-screen flex flex-row overflow-hidden">
          <Outlet />
        </div>
      ),
      children: [
        {
          index: true,
          element: <LoginPage />
        }
      ]
    },
    {
      path: '/resetPassword',
      element: (
        <div className='h-screen w-screen flex flex-row overflow-hidden'>
          <Outlet/>
        </div>
      ),
      children: [
        {
          index: true,
          element: <ResetPasswordPage/>
        }
      ]
    },
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
