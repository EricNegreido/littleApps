import { useState } from 'react'
import { Link } from "../../Link";
import './style.css';

function Light({ toggle = false, speed = 1, delay = 0, initialColor = 'redLights'}) {
  const [color, setColor] = useState(initialColor)

  function pickColor(event) {
    setColor(event.target.value)
  }
  return <article className='componentLight'>
    <div className='light' style={{ animationName: toggle && color, animationDuration: speed + 's', animationDelay: delay + 's' }}></div>
    <select  className='lamp' onChange={pickColor} name="color" defaultValue={initialColor}>
      <option value={'redLights'}> rojo </option>
      <option value={'blueLights'}> azul </option>
      <option value={'greenLights'}> verde </option>
      <option value={'yellowLights'}> amarillo </option>
      <option value={'violetLights'}> violeta </option>
    </select>
  </article>
}
export function ChristmasLights() {
  const [toggle, setToggle] = useState(false);
  const [speed, setSpeed] = useState(1)
  const [delay, setDelay] = useState(1)
  const [lamp, setLamp] = useState(5);
  const lightsOn = {
    firstLights: `${speed}s infinite alternate`,
    secondLights: `${speed}s infinite alternate ${speed}s`

  }
  function handleCLick() {
    setToggle(!toggle);
  }
  function handleChange(event) {
    const name = event.target.name
    console.log(event.target.name)
    if (name == 'speed') {
      setSpeed(event.target.value)
    } else if (name == 'delay') {
      setDelay(event.target.value)
    } else {
      setLamp(event.target.value)
    }
  }

  const lights = [];
  for (let index = 0; index < lamp; index++) {
    if (index % 4 == 0) {
      lights.push(<Light key={index} toggle={toggle} speed={speed} delay={delay} />);
    } else if (index % 4 == 1){
      lights.push(<Light key={index} toggle={toggle} speed={speed} initialColor={'blueLights'}/>);
    } else if (index % 4 == 2){
      lights.push(<Light key={index} toggle={toggle} speed={speed} initialColor={'greenLights'} delay={delay}/>);
    }else{
      lights.push(<Light key={index} toggle={toggle} speed={speed} initialColor={'yellowLights'}/>);

    }
  }
  return <>
    <h1> Christmas Lights </h1>
    <section className="controllerBar">
      <button className='switch' onClick={handleCLick}> On/off </button>
      <div className='controllRange'>
        <label htmlFor="speed"> Velocidad:</label>
        <input onChange={handleChange} name="speed" className='interval' type="range" min={0} max={10} step={0.1} value={speed} />
        <p>{speed}</p>
      </div>
      <div className='controllRange'>

        <label htmlFor="delay"> Delay: </label>
        <input onChange={handleChange} name="delay" className='interval' type="range" min={0} max={4} step={0.2} value={delay} />
        <p>{delay}</p>
      </div>
      <div className='controllRange'>
        <label htmlFor="lamp"> Luces: </label>
        <input onChange={handleChange} name="lamp" className='interval' type="range" min={1} max={20} step={1} value={lamp} />
        <p>{lamp}</p>
      </div>
    </section>
    <main className="stringLights">
      {lights}
    </main>
    <Link to='/'> Inicio </Link>
  </>
}