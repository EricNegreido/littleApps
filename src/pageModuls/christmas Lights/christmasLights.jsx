import {useState} from 'react'
import { Link } from "../../Link";
import './style.css';

const NLIGHTS = 5;
export function ChristmasLights(){
  const [toggle, setToggle] = useState(false);
  const [speed, setSpeed] = useState(1)
const lightsOn={
    firstLights: `${speed}s infinite alternate`,
    secondLights: `${speed}s infinite alternate ${speed}s`
    
}
  function handleCLick(){
    setToggle(!toggle);
    }
  function handleChange(event){
    setSpeed(event.target.value)
  }

  function Light({toggle = false}){
    const [color, setColor] = useState('redLights')
    const [speed, setSpeed] = useState(1)

    function pickColor(event){
      setColor(event.target.value)
    }
    return <>
      <div className='light' style={{animationName: toggle && color, animationDuration: '2s'}}></div>
      <select onChange={pickColor} name="color">
        <option value={'redLights'}> rojo </option>
        <option value={'greenLights'}> verde </option>
        <option value={'yellowLights'}> amarillo </option>
        <option value={'violetLights'}> violeta </option>
      </select>
    </>
  }

  const lights = [];
  for (let index = 0; index < NLIGHTS; index++) {
    lights.push(<Light key={index} toggle={toggle}/>);         
  }
    return <>
      <h1> Christmas Lights </h1>
      <main className="stringLights">
        {lights}
      </main>
      <section className="controllerBar"> 
        <button className='switch' onClick={handleCLick}> On/off </button>
        <div>
          <input onChange={handleChange} className='interval' type="range" min={0.1} max={10} step={0.1} value={speed}/>
          <p>{speed}</p>
        </div>
      </section>
      <Link to='/'> Inicio </Link>
    </>
}