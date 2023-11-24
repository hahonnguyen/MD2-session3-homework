import React, { useState } from 'react'

function Count() {
const [count,setCount] = useState(0);

  return (
    <div>
        <p>Bạn đã click {count} lần</p>
        <button onClick={()=>setCount(count + 1)}>Click để tăng số lần</button>
    </div>
  )
}

export default Count