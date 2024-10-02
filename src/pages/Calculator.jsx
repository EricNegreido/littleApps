import { Link } from "../Link"
import '../pageModuls/calculator/style.css'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const operators = ["/", "x", "+", "-"]
const footOperators = [0, ".", "AC", "+/-"]

export function Calculator() {
  return (
    <>
      <h1> Calculator</h1>
      <header>
        <input className="screen" type="number" name="" id="" />
      </header>
      <main className="board">
        <article className="numKeypad">
          {numbers.map((val, i) => {
            return <div className="numbers" key={i}> {numbers[i]} </div>
          })}
        </article>
        <aside className="opKeypad">
          {operators.map((val, i) => {
            return <div className="operators" key={i}> {operators[i]} </div>
          })}
        </aside>
      </main>
      <footer className="footerOperators">
        {footOperators.map((val, i) => {
            if(i == 0){
              return <div className="numbers" key={i}> {footOperators[i]} </div>

            }
            return <div className="footOperators" key={i}> {footOperators[i]} </div>
          })}
      </footer>

      <Link to='/'> Inicio </Link>
    </>)
}