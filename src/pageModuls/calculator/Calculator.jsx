import { useState } from "react"
import { Link } from "../../Link"
import './style.css'
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const operators = ["/", "*", "+", "-", "+/-", '=']
const footOperators = ['0', ".", "AC"]

export function Calculator() {
  const [display, setDisplay] = useState({
    num_1: '0',
    num_2: '',
    operator: '',
    flagOp: false

  })

  function handleChange(value) {
    if (!value.slice(1).match(/(\+\/s-)|([+\-*/])/)) {
      if (value.length > 8) return
      setDisplay((prevState) => ({
        ...prevState,
        num_1: value,
        operator: '',
        flagOp: false
      }))
    } else {
      if (!display.flagOp) {
        let operator = value.slice(1).match(/[+\-*/]/);
        operator = operator[0]
        setDisplay((prevState) => ({
          ...prevState,
          operator: operator,
          flagOp: true
        }))
      } else {
        let num2 = value.slice(1).split(/[+\-*/]/, 2);
        num2 = num2[1];
        if (num2.length > 8) return
        setDisplay((prevState) => ({
          ...prevState,
          num_2: num2,
        }))
      }
    }
  }

  function handleClick(value) {
    let n_1 = display.num_1
    let n_2 = display.num_2
    let op = display.operator
    let num = ''; 
    switch (value) {
      case 'AC':
        setDisplay({
          num_1: 0,
          num_2: '',
          operator: '',
          flagOp: false
        })
        break;
      case '=':
        n_1 = parseFloat(n_1)
        n_2 = parseFloat(n_2)
        if(op == '+'){

          setDisplay({
            num_1: `${n_1 + n_2}`,
            num_2: '',
            operator: '',
            flagOp: false
          })
        }else if (op == '-'){
          setDisplay({
            num_1: `${n_1 - n_2}`,
            num_2: '',
            operator: '',
            flagOp: false
          })
        }else if (op == '*'){
          setDisplay({
            num_1: `${n_1 * n_2}`,
            num_2: '',
            operator: '',
            flagOp: false
          })
        }else if (op == '/'){
          setDisplay({
            num_1: `${n_1 / n_2}`,
            num_2: '',
            operator: '',
            flagOp: false
          })
        }
        break;
      case '+/-':
        console.log('+/-')
        num = display.flagOp ? 'num_2' : 'num_1';
        setDisplay((prevState) => ({
          ...prevState,
          [num]: `${(num == 'num_1' ? n_1 : n_2) * (-1)}`,
        }))
        break;
      default:
      
        if (!display.flagOp) {
          handleChange(display.num_1 + value)
        }else {
          handleChange(display.num_1 + display.operator + display.num_2 + value)
        }
        break;
    }
    
  }

  return (
    <>
      <h1> Calculadora</h1>
      <header>
        {/* <section className="history">
          <div> {display.num_1 != 0 && display.num_1}</div>
          <div> {display.operator}</div>
          <div> {display.num_2 != 0 && display.num_2}</div>
        </section> */}
        <input onChange={e => handleChange(e.target.value)} className="screen" type="text" name="" id="" value={display.num_1 + display.operator + display.num_2} />
      </header>
      <main className="board">
        <article className="numKeypad">
          {numbers.map((val, i) => {
            return <div onClick={() => handleClick(val)} className="numbers" key={i}> {val} </div>
          })}
        </article>
        <aside className="opKeypad">
          {operators.map((val, i) => {
            return <div onClick={() => handleClick(val)} className="operators" key={i}> {val} </div>
          })}
        </aside>
      </main>
      <footer className="footerOperators">
        {footOperators.map((val, i) => {
          if (i == 0) {
            return <div onClick={() => handleClick(val)} className="numbers" key={i}> {val} </div>

          }
          return <div  onClick={() => handleClick(val)}className="footOperators" key={i}> {footOperators[i]} </div>
        })}
      </footer>

      <Link to='/'> Inicio </Link>
    </>)
}