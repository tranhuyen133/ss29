import React from 'react';
import Child5 from './Child5';
export default function Parent5() {
    const product = {
        id: 1,
        name: 'Nguyễn Minh Sơn',
        price: 100000,
        quantity: 2
      };
    
  return (
    <div>
       <Child5 product={product} />
    </div>
  )
}
