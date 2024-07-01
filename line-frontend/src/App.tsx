import Body from './components/Body';
import NavigationBar from './components/NavigationBar'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import FriendsPage from './pages/FriendsPage';
import ChatsPage from './pages/ChatsPage';
import AddFriendsPage from './pages/AddFriendsPage';

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
        }
      ]
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
