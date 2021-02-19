import React, {useState, useEffect, useRef} from 'react'

export default function UseReff() {

  const [name, setName] = useState('')
  //const renderCount = useRef(1)
  const inputRef = useRef()
  
  function focus() {
    console.log(inputRef.current)
    inputRef.current.focus()
  }

  /* useEffect(() => {
    renderCount.current = renderCount.current + 1
  }) */
  
    return (
      <div>
      <h1>UseRef</h1>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
        <div>My name is {name}</div>
        {/* <div>I rendered {renderCount.current} times</div> */}
        <button onClick={focus}>Focus</button>
      </div>
    );
  }