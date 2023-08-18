import React from 'react'
import {useParams,useNavigate} from "react-router-dom"

const User = () => {
    const params = useParams();
    console.log(params.id);
    
    const navigation = useNavigate();

  return (
    <div className='user'>User
    <h1><button onClick={()=> navigation("/about")}>About Page</button>
    <button onClick={()=> navigation("/contact")}>Contact Page</button></h1>
    </div>
  )
}

export default User