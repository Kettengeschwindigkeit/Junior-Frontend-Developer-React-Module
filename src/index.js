import React from "react";
import reactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css"

const element = <h1>Hello World</h1>
const element1 = React.createElement('h1', null, 'Hello World')

console.log(element)
console.log(element1)

reactDOM.render(element, document.getElementById('root'))
