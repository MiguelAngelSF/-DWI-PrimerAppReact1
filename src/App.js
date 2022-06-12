import React, { useState } from "react";
import "./App.css";

function App() {

  const [people, setPeople] = useState([
    {
      name: "John",
      lastName: "Doe",
      age: 30,
      favouriteFood: "Pizza",
      favouriteColour: "Red",
      counter: 0,
    },
  ]);

  const [operation, setOperation] = useState([
    {
      result: "",
      Number1: "",
      Number2: ""
    },
  ])

  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  

  const [Number1, setNumber1] = useState("");
  const [Number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const sum = function (e) {
    setResult(Number(Number1) + Number(Number2));
  };
    

  return (
    <div className="App">
      <input
        type="text"
        name="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        name="lastName"
        onChange={(event) => {
          setLastname(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setPeople((current) => [{ name, lastName }, ...current]);
        }}
      >
        Add user
      </button>
      <ul>
        {people.map((person, idx) => (
          <li id={idx}>{`${person.name} ${person.lastName}`}</li>
        ))}
      </ul>
      
      <label for="Number1">Ingresa el Primer Numero:
      </label>
      <input
        type="number"
        name="Number1"
        onChange={(event) => {
          setNumber1(event.target.value);
        }}
      />
      <br/>
      <br/>
      <label for="Number1">Ingresa el Segundo Numero:
      </label>
      <input
        type="number"
        name="Number2"
        onChange={(event) => {
          setNumber2(event.target.value);
        }}
      />
      <br/>
      {/* <button
        onClick={()=> {
          setOperation((current) => [{ Number1, Number2, result }, ...current]);
        }}
      >
        Add user
      </button> */}
      <button className="btn" onClick={sum}>Sumar</button>
      <br/>
      <br/>
      <label for="Number1">Resultado:
      </label>
      <input
        type="text"
        name="results"
        value={result}
        disabled
      />
      {/* <ul>
        {operation.map((operation, idx) => (
          <li id={idx}>{`${operation.result}`}</li>
        ))}
      </ul> */}
    
      

    </div>
  );
}

export default App;