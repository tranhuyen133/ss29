import React from 'react'
import Child6 from './Child6'
export default function Parent6() {
  const users = [
    { id: 1, name: 'Nguyễn Minh Sơn', address: 'Hà Nội', email: 'son@email.com' },
  ];
  return (
    <div>
      <Child6 users={users} />
    </div>
  )
}
