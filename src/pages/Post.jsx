import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Post({ post, ans }) {
  const [po, setpo] = useState([])
const [fin,setfin] =useState([])
  useEffect(() => {
    const sum = post.view.location.pathname
    const result = parseInt(sum.substring(6), 10)

    const final = ans.find(cart => cart.userId === result);
    setpo(final.products)
    setfin(final)
  }, [])

  console.log(po);

  return (
    <div style={{ width: "100%", height: "100vh" }} className='container d-flex justify-content-center align-items-center'>

      <div>
      <h1 className='mt-5 text-center'>{`UserId : ${fin.userId}`}</h1>
      <Col className=' d-flex' style={{ width: '100%', height: '100vh', flexWrap: "wrap" }} sm={12} md={6} lg={6} xl={3} >

     
       
        {po?.map((user,index)=>(
           <Card key={index} style={{ width: '350px',height:"fit-content"
          }} className='m-2'>
          <Card.Body>
          <img width="150px" height="100px" src={user.thumbnail} alt="" />
          <Card.Text>
           {user?.title}
          </Card.Text>
          <h4>{`price :${user?.price}`}</h4>
          <h3>{`quantity :${user?.quantity}`}</h3>
        </Card.Body>
      </Card>
        ))}


        </Col>
      </div>

    </div>
  )
}

export default Post
