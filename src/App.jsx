
import { BrowserRouter ,Routes,Route,Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

import Login from './pages/Login'
import Home from './pages/Home'
import Post from './pages/Post'
import { useEffect, useState } from 'react'

function App() {
  const [t,sett] =useState(false)
const [post,setpost] =useState()
const [ans,setans] =useState([])
const [email,setemail]=useState('')

useEffect(()=>{
if(email){
  sett(true)
}else{
  sett(false)
}
},[email])
const user =t
  return (
    <>
      <BrowserRouter> 
      <Navbar email={email} setemail={setemail} t={t} />
      <Routes>
        <Route path='/' element={<Home setpost={setpost} setans={setans} email={email}/>}/>
        <Route path='/login' element={user?<Navigate to="/"/>:<Login setemail={setemail} />}/>
        <Route path='/post/:id' element={user? <Post post={post} ans={ans} /> : <Navigate to="/login" />}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
   
       
      </BrowserRouter>

    </>
  )
}

export default App
