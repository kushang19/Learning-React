import React, { useEffect, useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const double = useMemo(() => slowFnc(number), [number]);

  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark]) ;

  useEffect(() =>{
    console.log("Theme");
  }, [theme])

  function slowFnc(num){
    console.log('Calling slow function');
    // Simulate a slow function

    for (let i = 0; i < 1000000000; i++) {
      return num * 2;
      }
  }

  return (
      <>
      <input 
      type="number" 
      value={number} 
      onChange={ e => setNumber(parseInt(e.target.value))} 
      />
      <button 
      onClick={() => setDark(prevDark => !prevDark)} 
      style={{display: 'block'}}>Change Theme</button>
      <div style={theme}>{double}</div>
      </>
  );
}

export default UseMemo;
