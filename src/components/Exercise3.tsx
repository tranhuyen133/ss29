import React, { useState } from 'react';

export default function Exercise3() {
    const [users, setUsers] = useState([
        {  name: 'Nguyễn Minh Sơn' }
      ]);
  return (
    <div>
        <h1>{users.map(user => (
        <div key={user.name}>
          <p>Họ và tên: {user.name}</p>
          
        </div>
      ))}</h1>
       
    </div>
  )
}
