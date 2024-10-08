import { Link } from "../../Link";
import './style.css';
export function ChristmasLights(){
    return <>
      <h1> Christmas Lights </h1>
      <main className="stringLights">
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div> </main>
      <Link to='/'> Inicio </Link>
    </>
}