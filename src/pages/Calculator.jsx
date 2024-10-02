import { Link } from "../Link"
import '../pageModuls/calculator/style.css'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const operators = ["%", "X", "+", "-"]

export function Calculator() {
  return (
    <>
      <h1> Calculator</h1>
      <main>
        <input className="screen" type="number" name="" id="" />
        <article className="board">
          {numbers.map((val, i) => {
            return <div className="numbers" key={i}> {numbers[i]} </div>
          })}
        </article>
        <aside>
          {operators.map((val, i) => {
            return <div className="operators" key={i}> {operators[i]} </div>
          })}
        </aside>
        <footer> 0 . =</footer>
      </main>
      <Link to='/'> Inicio </Link>
    </>)
}