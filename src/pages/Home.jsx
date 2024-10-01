import {Link} from '../Link.jsx'
import '../App.css'

export default function HomePage(){
  return(
    <>
      <h1> Inicio </h1>
      <main className='appsBar'>
        <Link className='itemApps' to='/about'>  Sobre Nosotros  </Link>
        <Link className='itemApps' to='/convertBin'> Binario a decimal </Link>
        <Link className='itemApps' to='/borderRadius'> Border Radius </Link>
        <Link className='itemApps' to='/calculator'> Calculadora</Link>
      </main>
    </>
  )

}