import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

 import jwtDecode from 'jwt-decode'

function Login({setemail}) {
  return (
    <div className='container d-flex  justify-content-center align-items-center'  style={{width:"100%",height:"90vh"}}>
    <div style={{width:'800px',height:"500px" ,backgroundColor:""}} className=" row shadow">
<div className="col-lg-5  d-flex justify-content-center align-items-center">
<div>
    <div className='border mt-2 rounded d-flex   justify-content-center align-items-center ' style={{width:"fit-content" ,height:"fit-content",backgroundColor:"gray",color:'white'}}>
       <GoogleLogin 
  onSuccess={credentialResponse => {
    const responsess = jwtDecode(credentialResponse.credential) 
    console.log(responsess);
    setemail(responsess)
    
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/></div>
    <div className='border mt-2 rounded d-flex justify-content-center align-items-center ' style={{width:"250px" ,height:"50px",backgroundColor:'blue',color:'white'}}><i class="fa-brands fa-facebook me-2"></i>Facebook</div>
    <div className='border mt-2 rounded d-flex justify-content-center align-items-center ' style={{width:"250px" ,height:"50px",backgroundColor:"black",color:'white'}}> <i class="fa-brands fa-github me-2"></i> Github</div>
   
</div>
</div>
<div className="col-lg-2  d-flex justify-content-center align-items-center ">
<div style={{width:"60px",height:"60px" ,borderRadius:"50%" }} className='border d-flex justify-content-center align-items-center '> OR </div>
</div>
<div className="col-lg-5  d-flex justify-content-center align-items-center ">
    <div>
        <input type="text" className='form-control mb-3 ' placeholder='Username'/>
        <input type="text" className='form-control mb-3 ' placeholder='Password'/>
       <center> <button className='btn btn-primary w-75 mb-2'>Login</button></center>
       <p>you have not an ant ? <a rel="stylesheet" href="#" >Register</a> </p>
    </div>

</div>
    </div>
    </div>
  )
}

export default Login