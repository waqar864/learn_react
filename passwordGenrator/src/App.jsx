
import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //useRef hook for copy data to clip[ board
  const passwordRef = useRef(null);

  const passwordGenrator = useCallback(() =>{
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()+=[]{}|;:,.<>/?"
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[length, numberAllowed, charAllowed,setPassword]);

  useEffect(() => {
    passwordGenrator();
  },[length, numberAllowed, charAllowed,passwordGenrator]);

  const passwordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
     <div className='w-full max-w-md mx-auto p-4 shadow-md rounded-lg my-8 text-orange-500 bg-gray-700'>
     <h1 className='text-white text-center my-3'>Password Genrator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
     
      <input type="text" value={password} className="outline-none w-full py-1 px-3 bg-gray-800 text-white" placeholder="Password" readOnly ref={passwordRef} />
      <button onClick={passwordToClipBoard} className='outline-none px-2 py-0.5 shrink-0 text-white shadow-lg bg-blue-700'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} />
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' className='cursor-pointer' onChange={() => {setNumberAllowed((prev) => !prev)}} />
        <label htmlFor='numberInput'>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type='checkbox' defaultChecked={charAllowed} id='characterInput' className='cursor-pointer' onChange={() => {setCharAllowed((prev) => !prev)}} />
        <label htmlFor='characterInput'>Characters</label>
      </div>
     </div>
     </div>
 
    </>
  )
}

export default App
