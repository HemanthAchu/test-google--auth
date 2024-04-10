import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Navbar({email,setemail}) {
  console.log(email.given_name);

const navigate =useNavigate()
const logout =()=>{
setemail('')
navigate('/login')
}

  return (
    <div className='navbar'>
      <span className='logo' ><Link style={{textDecoration:"none"}} to={'/'} >Leo</Link></span>
    <ul className='list'>
        <li className='listitem'>
            <img src={email.picture
} alt=""  className='avatar'/>
        </li>
        <li className='listitem' >{email.given_name} {email.family_name
}</li>
{!email?<Link style={{textDecoration:'none'}} to="/login">Login</Link>:
<Link onClick={logout}  style={{textDecoration:'none'}} to="/login">Logout</Link>
}
       
      </ul>
       
    </div>
  )
}

export default Navbar
