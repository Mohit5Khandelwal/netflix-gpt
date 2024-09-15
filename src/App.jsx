import { RouterProvider } from 'react-router-dom'
import React from 'react'
import Body from './components/Body'
import { createBrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import Browse from './components/Browse'



const App = () => {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/browse',
          element: <Browse />
        }
  
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
