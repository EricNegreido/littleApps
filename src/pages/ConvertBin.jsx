import { useState } from 'react'
import '../App.css'
import { Link } from '../Link'

function binToDec( bin ){
  return parseInt(bin, 2)
}


export function ConvertBin() {
  const [dec, setDec] = useState('...') 
  const [bin, setBin] = useState('entry 0 or 1') 

  function inputControll(value){
    setBin(value)
  const binaryPattern = /^[01]+$/;
    if (!binaryPattern.test(value)){
      setDec( <p style={{color: 'red'}}> Solo ingresa valores entre 0 y 1 </p>) 
    }else{
      let binary = binToDec( value)
      setDec(binary);
    }
    
  }
  
  function handleSubmit(e){
    e.preventDefault();
    let binary = e.currentTarget.numerBin.value;
    binary = binToDec( binary)
    setDec(binary);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input  type="text" name='numerBin' value={bin}  onChange={e => inputControll(e.target.value)}/>
      <button type='submit'> Convert to decimal </button>
    </form>
    <footer>
      {dec}
    </footer>
      <Link to='/'> Inicio </Link>
    </>
  )
}

