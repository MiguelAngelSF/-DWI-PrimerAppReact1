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

  // const [operation, setOperation] = useState([
  //   {
  //     result: "",
  //     Number1: "",
  //     Number2: ""
  //   },
  // ])

  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  

  const [Number1, setNumber1] = useState("");
  const [Number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const add = function (e) {
    setResult(Number(Number1) + Number(Number2));
  };
  const rest = function (e) {
    setResult(Number(Number1) - Number(Number2));
  };
  const division = function (e) {
    setResult(Number(Number1) / Number(Number2));
  };
  const multi = function (e) {
    setResult(Number(Number1) * Number(Number2));
  };
    

  return (
    ////////////////////LISTA DE USUARIOS//////////////////////////
    <div className="App" class="container">
      <div class="list">
      <label for="Number1">First Name
      </label>
      <input
        type="text"
        name="name"
        class="form-control"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
       <br/>
      <label for="Number1">Last Name
      </label>
      <input
        type="text"
        name="lastName"
        class="form-control"
        onChange={(event) => {
          setLastname(event.target.value);
        }}
      />
       <br/>
      <button
        class="btn btn-primary"
        onClick={() => {
          setPeople((current) => [{ name, lastName }, ...current]);
        }}
      >
        Add user
      </button>
      <br/>
      <ul class="list-group list-group-numbered">
        {people.map((person, idx) => (
          <li class="list-group-item" id={idx}>{`${person.name} ${person.lastName}`}</li>
        ))}
      </ul>
      </div>

      {/* OPERACIONES BASICAS */}
      
      <div class="calc">
      <label for="Number1">First Number
      </label>
      <input
        type="number"
        name="Number1"
        class="form-control"
        onChange={(event) => {
          setNumber1(event.target.value);
        }}
      />
      <br/>
      <label for="Number1">Second Number
      </label>
      <input
        type="number"
        name="Number2"
        class="form-control"
        onChange={(event) => {
          setNumber2(event.target.value);
        }}
      />
      
      {/* <button
        onClick={()=> {
          setOperation((current) => [{ Number1, Number2, result }, ...current]);
        }}
      >
        Add user
      </button> */}
      <br/>
      <div class="buttons">
        <button className="btn" type="button" class="btn btn-primary" 
        onClick={add}>Sumar</button>
        <button className="btn" type="button" class="btn btn-warning" 
        onClick={rest}>Restar</button>
        <button className="btn" type="button" class="btn btn-success" 
        onClick={multi}>Multiplicar</button>
        <button className="btn" type="button" class="btn btn-danger" 
        onClick={division}>Dividir</button>
      </div>
      <br/>
      <label for="Number1">Result
      </label>
      <input
        type="text"
        name="results"
        class="form-control"
        value={result}
        disabled
      />
      {/* <ul>
        {operation.map((operation, idx) => (
          <li id={idx}>{`${operation.result}`}</li>
        ))}
      </ul> */}

      </div>
    </div>
  );
}

export default App;