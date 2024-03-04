import { useEffect } from 'react'
import './Calculate.css'
import Button from '../../Button/Button'

export default function Calculator() {

  useEffect(() => {
    const plusBTN = document.getElementById('plus')
    const minusBTN = document.getElementById('minus')
    const multiplyBTN = document.getElementById('multiply')
    const divideBTN = document.getElementById('divide')
    const numberOne = document.getElementById('numberOne')
    const numberTwo = document.getElementById('numberTwo')
    const resultElement = document.getElementById('result')
    let sign = '+'
  
    plusBTN.onclick = function() {
      sign = '+'
      resultElement.textContent = calculated()
    }
    minusBTN.onclick = function() {
      sign = '-'
      resultElement.textContent = calculated()
    }
    multiplyBTN.onclick = function() {
      sign = '*'
      resultElement.textContent = calculated()
    }
    divideBTN.onclick = function() {
      sign = '/'
      resultElement.textContent = calculated()
    }
  
    function calculated() {
      const num1 = +numberOne.value
      const num2 = +numberTwo.value
      let result
      if( sign === '+') {
        result = num1 + num2
      } else if (sign === '-') {
        result = num1 - num2
      } else if (sign === '*') {
        result = num1 * num2
      } else if (sign === '/') {
        result = num1 / num2
      }

      return result.toFixed(2)
    }
  })


  return(
    <>
    <div className='blockCalculate'>
      <h2 className='tegH2'>Калькулятор</h2>
      <div>
        <div className='blockInput'>
          <input 
          type="number"
          placeholder="Введите число 1" 
          id="numberOne"
          />
          <input 
          type="number"
          placeholder="Введите число 2" 
          id="numberTwo"
          />
        </div>
        <div className='BTN'style={{display: 'flex', justifyContent: 'space-around',margin: '0px',}}>
          <button id='plus'>+</button>
          <button id='minus'>-</button>
          <button id='multiply'>*</button>
          <button id='divide'>/</button>
        </div>
        <div className='result'>
          <strong>Результат: </strong><span id='result'></span>
        </div>
      </div>
    </div>
    </>
    
  ) 
}