import React from 'react'
interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}

interface Child6Props {
  users: User[];
}
export default function Child6() {
  const Child6: React.FC<Child6Props> = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>Họ và tên: {user.name}</p>
            <p>Địa chỉ: {user.address}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
}
