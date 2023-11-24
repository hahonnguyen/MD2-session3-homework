import React, { useState } from 'react'

function CounText() {
    const [CounText, setCountText] = useState('')
    const handleInput = () => {
const elementInput = document.getElementById('myInput');
if (elementInput) {
    const text = elementInput.value;
    setCountText(text)
}
    }
    const charCount = CounText.length;
    
  return (
    <div>
        <input type="text" id='myInput' onChange={handleInput}/>
        <p>Số ký tự : {charCount}</p>

    </div>
  )
}

export default CounText