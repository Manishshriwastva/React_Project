import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Pagenotfound from './Pages/Pagenotfound'
import Registerr from './Pages/Auth/Registerr'
import Login from './Pages/Auth/Login'

function App() {

  return (
    <>

    <BrowserRouter>
     
     <Routes>
      
      <Route  path='/' element={<Home/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route  path='about' element={<About/>}/>

      <Route  path='/register' element={<Registerr/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='*' element={<Pagenotfound/>}/>




     </Routes>
     
    </BrowserRouter>
      
    </>
  )
}

export default App
