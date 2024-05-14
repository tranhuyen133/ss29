import React, { Component } from 'react'
interface Props{

}
interface State{
    name:string;
    age:number;
    address:string;

}
export default class Class extends Component<Props,State> {
    constructor (props:Props){
        super(props)
        this.state ={
            name:"minh thu",
            age:25,
            address: "hà nội"
        }
    }
    //khai báo hàm ở trên render()
    handleClick=()=>{
        //khi muốn cập nhật state
        this.setState({
            age:26,
            name:"lan"
        })
    }
    render(){
  return (
    <div>
      Class 
{
    /*
    trong class quản lí State
    */
}
    {this.state.name}năm nay {this.state.age}tuổi
    <button onClick={this.handleClick}></button>
    </div>
  )
}
}
