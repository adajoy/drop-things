import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0)
  const [shake, setShake] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const count = parseInt(localStorage.getItem('count'))
    setCount(count || 0)
  }, [])

  const handleClick = () => {
    ref.current.load()
    ref.current.play()
    console.log(ref.current);
    setCount(v => v + 1)
    localStorage.setItem('count', count + 1)

    setShake(true)
    setTimeout(() => {
      setShake(false)
    }, 500);
  }

  const clear = () => {
    setCount(0)
    localStorage.setItem('count', 1)
  }
  
  return (
    <div className="app">
      <div className="title">How many things has Sylvia dropped today? 🥹</div>
      <p className="count">{count}</p>
      <button className="button" type="button" onClick={handleClick}>OH NO! ONCE AGAIN!!</button>
      <img className={`img ${shake ? 'shake' : ''}`} src={require('../public/img.jpg')} onClick={clear}></img>
      <audio ref={ref}>
        <source src={require('../public/aaaah.wav')} type="audio/wav" />
      </audio>
    </div>
  )
}

export default App