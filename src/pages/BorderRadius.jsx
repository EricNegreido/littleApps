import { useState } from 'react'
import '../App.css'
import '../pageModuls/borderRadius/style.css'
import { Link } from '../Link';

export function BorderRadius() {
const [bord, setBorder] = useState({
  topR: 0,
  topL: 0,
  bottomR: 0,
  bottomL: 0
});

function copyStyle(value){
  navigator.clipboard.writeText( "border-radius: " + value)
  .then(() => {
    console.log('Texto copiado al portapapeles')
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })
}

function borderRadius(corner, value) {

  setBorder((prevState) => ({
    ...prevState,
    [corner]: Math.max(0, prevState[corner] + value) // Asegúrate de que no baje de 0
  }))
  return
}

  return (
    <>
    <h1>Border Radius Generator</h1>
    <div className='buttons'>
      <div className='buttonTopLeft'>
      <button onClick={() => borderRadius('topL', 5)}>+</button>
      <button onClick={() => borderRadius('topL', -5)}>-</button>
      </div>
      <div className='buttonTopRight'>
      <button onClick={() => borderRadius('topR', 5)}>+</button>
      <button onClick={() => borderRadius('topR', -5)}>-</button>
      </div>
    </div>
    <div className='square' style={{borderRadius: bord.topL+"px"+" "+bord.topR+"px"+" "+bord.bottomR+"px"+" "+bord.bottomL+"px"}}> </div>
    <div className='buttons'> 
      <div className='buttonBottomLeft'>
      <button onClick={() => borderRadius('bottomL', 5)}>+</button>
      <button onClick={() => borderRadius('bottomL', -5)}>-</button>
      </div>
      <div className='buttonBottomRight'>
      <button onClick={() => borderRadius('bottomR', 5)}>+</button>
      <button onClick={() => borderRadius('bottomR', -5)}>-</button>
      </div>
    </div>
    <footer>
       <code className='code'> 
        border-radius: { bord.topL+"px"+" "+bord.topR+"px"+" "+bord.bottomR+"px"+" "+bord.bottomL+"px"};
       </code>
       <button onClick={() => copyStyle( bord.topL+"px"+" "+bord.topR+"px"+" "+bord.bottomR+"px"+" "+bord.bottomL+"px")}> Copiar </button>
    </footer>
    <Link to='/'> Inicio </Link>
    </>
  )
}

