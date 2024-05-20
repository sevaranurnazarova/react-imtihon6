import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AllProducts from './Pages/AllProducts'
import Profile from './Pages/Profile'
import { useState } from 'react'
import LoginPage from './Pages/LoginPage'
import Client from './Pages/Client'
function App() {
  let [login,setLogin]=useState(false)
  let [profilvalues,setProfilvalues]=useState({name:'',pass:''})
  let [vareb,setVareb]=useState(true)
  return (
    <BrowserRouter>
    {
      login?<> 
      <Routes>
        <Route path='/' element={<Client/>}/>
        <Route path="/all" element={<AllProducts vareb={vareb} setVareb={setVareb}/>}/>
        <Route path="/profile" element={<Profile values={profilvalues}/>}/>
      </Routes></>:<><LoginPage setLogin={setLogin} setProfilvalues={setProfilvalues} /></>
    }
    </BrowserRouter>
  )
}

export default App
