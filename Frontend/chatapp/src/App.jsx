
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/authContext'

function App() {

  const {authUser} = useAuthContext();
 

  return (
  
     <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home></Home> : <Navigate to="/login"/>}></Route>
        <Route path='/login' element={authUser ? <Navigate to="/"/> : <Login></Login>}></Route>
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp></SignUp>}></Route>

      

      </Routes>
      <Toaster/>
      
      
     </div>
  
  )
}

export default App
