import React from 'react'
interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  interface Child5Props {
    product: Product;
  }
export default function Child5() {
    const Child5 = ({ product }: Child5Props) => {
  return (
    <div>
       <p>Họ và tên: {product.name}</p>
      <p>Giá: {product.price}</p>
      <p>Số lượng: {product.quantity}</p>
    </div>
  )
}
}
