import React, { useEffect, useState } from 'react'
import vector from "../../../assets/Vector.svg"
import axios from '../../../api'

const Users = () => {
  const [data,setData] = useState(null)
  const [limit ,setLimit] = useState(1)
  useEffect(()=>{
      axios
        .get(`/users?limit=${5 * limit}`)
        .then(res => setData(res.data.users))
        .catch(err => console.log(err))
  }, [limit])
  console.log(data);
  const users = data?.map((users)=>(
      <tr key={users.id}>
          <td>
              <img className='users__img' src={users.image} alt={users.firstName} />
              <h3>{users.firstName + " " + users.lastName}</h3>
          </td>
          <td>
              <p>{users.username}</p>
          </td>
          {/* <td>
              <p className='users__text'>{users.}</p>
          </td>
          <td>
              <p className='users__text'>{users}</p>
          </td>
          <td>
              <p>{users.rating}</p>
          </td> */}
      </tr>
  ))
return (
  <>
  <div className='users'>
      <div className='container'>
          <div className='users__info'>
              <h1 className='users__title'>Users</h1>
              <div className='users__btns'>
                  <button><img src={vector} alt="" /></button>
                  <button>Add</button>
              </div>
          </div>
          <table>
              <thead>
                  <tr>
                      <th>Ticket details</th>
                      <th>Customer name</th>
                      <th>Date</th>
                      <th>Priority</th>
                  </tr>
              </thead>
              <tbody>
                  {users}
              </tbody>
          </table>
          <button className='users__btn' onClick={()=> setLimit(prev => prev +1)}>See more</button>
      </div>
  </div>
  </>
  )
}

export default Users