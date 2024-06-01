import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider
} from "react-router-dom";

import RootLayout from './Layout/RootLayout';
import LogInPage from './Pages/LogInPage/LogInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import HomePage from './Pages/Home/HomePage';





const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      
        <Route element= {<RootLayout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LogInPage/>}/>
          <Route path='/reg' element={<SignUpPage/>}/>
        </Route>
      </>
    )
  );



  return (
    <>
    
    <RouterProvider
      router={router}
    />

    </>
  )
}

export default App