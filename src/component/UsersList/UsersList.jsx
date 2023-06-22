import React from 'react'
import './UsersList.css'
import User from '../User/User'
import { useEffect, useState } from 'react';

export const UsersList = ({list,deletefunc}) => {

  return (
    <div className='container_userslist' >

              { 
                list.map((user,index)=>{
                    return <User key={index} deletefunc={deletefunc(user.id)} id={user.id} firstn={user.firstName} lastn={user.lastName}  email={user.email} enable={false} />
                })
              }

    </div>
  )
}
