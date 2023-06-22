import logo from './assert/userIcon.png';
import './App.css';
import { UsersList } from './component/UsersList/UsersList';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

function App() {

      const [usersdb,setUsersdb] = useState([])

      var request = {id:uuid(), firstName: "", lastName: "", email: "",enable:false };

      const handleFirst = (event) =>{
                 request.firstName = uuid
                 request.firstName = event.target.value
          }     
      const handleLast = (event) =>{
        request.lastName = event.target.value
          }   
          const handleEmail = (event) =>{
            request.email = event.target.value
            }  
    /*  const [request,setRequest]=useState({
             firstname:"",
             lastname:"",
             email:"",
             enable:false,
          }) */

          const insertUser = (e) => {
            e.preventDefault();
              console.log( request )
                    setUsersdb(usersdb=> [...usersdb, request]);
              localStorage.setItem("userslist",usersdb)
              console.log(usersdb)
           //   console.log( "users :" +usersdb.map((u)=>{
           //         return JSON.stringify(u)
           //   }) )
            }

            const deletefun = (id) =>{
                     console.log(usersdb)
                    console.log("ID : "+ id)
            }


  return (
    <div className="App">
      <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />

        <span className='span' >
           USERS LIST
        </span>

        {/* Table list of the users registed */}

        <UsersList  list={usersdb} deletefunc={(id)=>deletefun(id)}  />

        {/* Form to do users's insertion */}

        <form onSubmit={insertUser}  className='form'  >

               <label>Firstname</label>
               <input type='text' onChange={handleFirst} placeholder='ex : Habib' className='child1' />

               <label>Lastname</label>
               <input type='text'  onChange={handleLast}
                placeholder='ex : Hardy' className='child2' />

               <label>Email</label>
               <input type='email'  onChange={handleEmail}
                placeholder='ex : habibhardy@gmail.com' className='child3' />

               <label>Make enable</label>
               <input type='checkbox'  value={true} className='child4' />
               <input type='checkbox'  value={false} className='child5'  />

                <input type='submit'  value={"Validate"} className='child6'  />

        </form>

      
      </header>
    </div>
  );
}

export default App;
