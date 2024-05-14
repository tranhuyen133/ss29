import React from 'react'
interface ChildrenCompProps {
    parentName: string;
  }
export default function Children_Comp() {
    const Children_Comp: React.FC<ChildrenCompProps> = ({ parentName }) => {
  return (
    <div>
            <p>Họ và tên Component con: {parentName}</p>

    </div>
  )
}
}
