import React from 'react'
import './User.css'

const User = (  { id, firstn ,lastn ,email,enable,deletefunc   }  ) => {
  return (
    <div className='container' >

               <div className='profile' >
               </div>

               <span>
                    {firstn}
               </span>

               <span>
                    {lastn}
               </span>

               <span>
                    {email}
               </span>

               <div  onClick={deletefunc}  className={enable === true ? "enableTrue":"enableFalse"}>
              
               </div>

    </div>
  )
}

export default User