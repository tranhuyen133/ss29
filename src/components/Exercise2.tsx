import React , {useState} from 'react'

export default function Exercise2() {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Trước khi nhập liệu: {inputValue === '' ? '(không có dữ liệu)' : null}</p>
      <p>Sau khi nhập liệu: {inputValue}</p>
    </div>
  )
}
