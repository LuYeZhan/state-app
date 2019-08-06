import React, { Component } from 'react'
import Number from "./Number";
import List from "./List"

class Counter extends Component {
  // esta es la forma complicado
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     number: 0,
  //   }
  // }


// esta es la forma simple y acortada, que funciona en javascript, y babel nos lo compila para que funcione en react
state = {
  number: 0,
  title: 'this is a counter',
  isNumberShowing: true,
  data: [
    {name: 'Barcelona', population: '1,5 millones'},
    {name: 'Madrid', population: '3,4 millones'},
    {name: 'Sevilla', population: '0,5 millones'},
    {name: 'Moscow', population: '12 millones'},
    {name: 'Dallas', population: '8 millones'}
  ]
}
// refactorización de lo de abajo
modifyNumber = (modification) => {
  let newNumber = this.state.number;
  this.setState({
  number: newNumber + modification
  })
}
// subtractNumber = () => {
//   let newNumber = this.state.number;
//   this.setState({
//   number: --newNumber
// })
// }
// // refactorizamos el set state de abajo
// addNumber = () => {
//   let newNumber = this.state.number;
//   this.setState({
//   number: ++newNumber
// })
// }

showTestBasedOnNumber = () => {
  const {number} = this.state;
  if(number > 0) {
    return <p> This number is higher than 0</p>
  } else if ( number < 0 ) {
    return <p>This number is lower than 0</p>
  } else {
    return <p>This number is 0</p>
  }
}
// renderizar listas con un foreach, forma dificil de renderizar una lista..
// generateList = () => {
//   const listItems = [];
//   this.state.data.forEach((city, index)=> {
//     listItems.push(
//     <li key={index}>
//       <p>{city.name}</p>
//       <p>{city.population}</p>
//     </li>
//     )
//   })
//   return listItems;
// }

// el render siempre renderiza despues de un set state
  render() {
// nunca hacer un set state despues del render, porque entraria en bucle y petaria la app
  console.log(this.state)
// good practice, siempre destructuramos los elementos despues del render
const {title, number, isNumberShowing, data} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        {/* con un ternario */}
        {/* {isNumberShowing ? <Number number = {number}/> : null} */}
        {/* Con un && */}
        {isNumberShowing && <Number number = {number}/>}

        {/* este meto this.set.state es el que vamos a utilizar para modificar states */}
        <button onClick={() => this.modifyNumber(-1)}>Subtract</button>
        <button onClick={() => this.modifyNumber(1)}>Sum </button>
        {this.showTestBasedOnNumber()}
        <List cities={data}/>
        {/* para renderizar listas, forma rapida y facil */}
        {/* <ul>
          {data.map((city, index)=>{
            return (
            <li key={index}>
              <p>{city.name}</p>
              <p>{city.population}</p>
            </li>
          );
        })}
        </ul> */}
        {/* <ul>
        {this.generateList()}
        </ul> */}
      </div>
    )
  }
}

export default Counter;
