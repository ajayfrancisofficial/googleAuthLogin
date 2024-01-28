import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home'


function App() {

  return (
    <>
   <Routes>
<Route path='/' element={<Login></Login>} ></Route>
<Route path='/home' element={<Home></Home>} ></Route>
<Route path='/*' element={<Navigate to={'/'}></Navigate>}>  </Route>
   </Routes>
    </>
  )
}

export default App
