import { Link } from '../Link.jsx'
import '../App.css'
import {NavBar} from "../reactComponents/navBar.jsx"

export default function HomePage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1> Inicio </h1>
      <main className='container text-center'>
        <div className='row gap-3 justify-content-center'>
          <Link className='itemApps col-md-3 col-sm-4' to='/about'>  Sobre Nosotros  </Link>
          <Link className='itemApps col-md-3 col-sm-4' to='/convertBin'> Binario a decimal </Link>
          <Link className='itemApps col-md-3 col-sm-4' to='/borderRadius'> Border Radius </Link>
          <Link className='itemApps col-md-3 col-sm-4' to='/calculator'> Calculadora</Link>
          <Link className='itemApps col-md-3 col-sm-4' to='/christmasLights'> Christmas Lights</Link>
          <Link className='itemApps col-md-3 col-sm-4' to='/personsList'> Lista de Personas </Link>
          <Link className='itemApps col-md-3 col-sm-4' to='/colorCycles'> Ciclo de colores</Link>
          <Link className='itemApps col-md-3 col-sm-4' to='/countDown'> Temporizador </Link>
        </div>
      </main>
    </>
  )

}