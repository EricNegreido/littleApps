import {useState} from 'react'
import { Link } from "../../Link";
import './style.css';
export function ChristmasLights(){
  const [toggle, setToggle] = useState(false);
  function handleCLick(){
    setToggle(!toggle);
    }
    return <>
      <h1> Christmas Lights </h1>
      <main className="stringLights">
        <div className={toggle ? 'light animationLights' : 'light'}></div>
        <div className={toggle ? 'light secondAnimationLights' : 'light'}></div>
        <div className={toggle ? 'light animationLights' : 'light'}></div>
        <div className={toggle ? 'light secondAnimationLights' : 'light'}></div>
        <div className={toggle ? 'light animationLights' : 'light'}></div>
        <div className={toggle ? 'light secondAnimationLights' : 'light'}></div>
        <div className={toggle ? 'light animationLights' : 'light'}></div> 
      </main>
      <button className='switch' onClick={handleCLick}> On/off </button>
      <Link to='/'> Inicio </Link>
    </>
}