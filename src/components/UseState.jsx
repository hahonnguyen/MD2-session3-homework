import React, { useState } from 'react'

function UseState() {
    const [count,setCount] = useState(10);
    console.log(count);

    // Kiểu String
    const [text, setText] = useState('Hello world')
    // Kiểu Boolean
    const [toggle,setToggle] = useState(true);
    //Array
    const [ArrList,setArrList] = useState([1,3,5,7]);
    //object
    const [objList, setObjList] = useState({
      objNumber : 50,
      objArr : [2,4,6,8], 
    });
  return (
    <div>
        <h1>UseState</h1>
        {/* Number */}
        <div>Number : {count}</div>
        <button onClick={()=>setCount(count - 1)}>Down</button>
        <button onClick={()=>setCount(count + 1)}>Up</button>

        {/* String */}
        <div>String : {text}</div>
        <button onClick={()=> setText('hi')}>Change</button>

        {/* Boolean */}
        {/* điều kiện ? statement true : statement false */}
        {toggle ? (<div>
            <p>Tung dep zai khong</p>
            <button onClick={()=>setToggle(!toggle)}>Click me</button>
        </div>) : (<div>
            <p>Không</p>
            <button onClick={()=>setToggle(!toggle)}>Click me</button>
        </div>)}
        {/* Array */}
        <h3>Array</h3>
        <div>Array gồm : {ArrList.toString()}</div>
        <button onClick={()=> setArrList([...ArrList,Math.floor(Math.random()*10)])}>Random</button>

        {/* object */}
        <h3>object</h3>
        <div>Number object : {objList.objNumber}</div>
        <button onClick={() => setObjList({...objList, objNumber: objList.objNumber + 1})}>Up</button>
        <div>Arr object : {objList.objArr.toString()}</div>
        <button onClick={()=>setArrList({...objList, objArr: [...objList.objArr,Math.floor(Math.random()*10) ],})}>Random number</button>

    </div>
  );
}

export default UseState