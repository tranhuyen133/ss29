import React, { useState } from 'react';
import Children_Comp from './Children_Comp'
export default function Parent_Comp() {
    const [name, setName] = useState<string>('Nguyễn Văn Nam');
  return (
    <div>
      <p>Họ và tên Component cha: {name}</p>
      <Children_Comp parentName={name} />
    </div>
  )
}
