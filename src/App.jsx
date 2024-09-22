import { useDispatch } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import React, { useEffect } from 'react'
import Body from './components/Body'
import { createBrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import Browse from './components/Browse'
import { Provider } from 'react-redux'
import store from './utils/store'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase'
import { addUser } from './utils/userSlice'





const App = () => {

//const dispatch = useDispatch();

  // useEffect( () => {

  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
        
  //       const {uid, email, displayName} = user.uid;

  //       console.log('----- In onAuthStateChanged -----------');

  //       dispatch( addUser({ uid: uid, email: email, displayName: displayName}) );
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //     }

  // })
  // }, []);
  
  
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element:
          <Login />
        },
        {
          path: '/browse',
          element: 
         
          <Browse />
        
        },
        {
          path: '/signUp',
          element: <Login />
        }
  
      ]
    }
  ]);

  // Handling action in store when state of login and signUp changes 
  

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  )
}

export default App
