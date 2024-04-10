import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import {Button,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Home({setpost,setans,email}) {
const [crt,setcrt] =useState([])

   useEffect(()=>{
    axios.get('https://dummyjson.com/carts').then((res)=>{setcrt(res.data.carts),res.data.carts.forEach((user) => {
      setpost(user.userId, user); // Passing userId and user details to setpost
    });})
  
  

   },[])
   
   const fan =(users)=>{
    setpost(users)
   }
   setans(crt)
console.log(crt);
console.log(`email ${email.given_name}`);
  return (
    <div  className='  border mt-4'  >
      {email? <Col className='mb-5 m-4 d-flex' style={{width:'100%',height:'100vh',flexWrap:"wrap"}} sm={12} md={6} lg={6} xl={3} >
    {
      crt?.map((users,index)=>(
        
        <Card key={index} style={{ width: '350px',height:"fit-content"
         }} className='m-2'>
        
        <Card.Body>
          <Card.Title>{`DiscountedTotal :${users.discountedTotal}`}</Card.Title>
          <Card.Text>
           {`Total products ${users.totalProducts}`}
          </Card.Text>
          <h4>{`UserId : ${users.userId
}`}</h4>
         <Link to={`/post/${users.userId}`}>
         <Button onClick={(users)=>fan(users)} variant="primary">Read More</Button></Link>
        </Card.Body>
      </Card>
      
      )
      
    )
      
    }
    </Col>:<div className='d-flex justify-content-center align-items-center w-100' style={{height:'100vh'}}>
       <img src="https://imgs.search.brave.com/V7myiSDErk0wKO2KRSdAsMJqZPV5nsDz-y-DbIOIn5E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/MjAyMjY5OS9waG90/by9jcnlpbmctc21p/bGV5LWZhY2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUww/cGxXZVVEQzNmUUlf/cFJaY2xjckJqWmpI/Y2U5UERvcHB5SXI2/TG1mdU09" alt="" />
       </div>}
   
    </div>
  )
}

export default Home
