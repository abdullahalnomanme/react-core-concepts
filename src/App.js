import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const styleCss ={
    color:'red',
    backgroundColor:'gray',
    border:'5px solid red',
    padding:'10px',
    borderRadius:'10px',
}
function App() {
    let person = {
        name: 'Dr. Mahfujur Rahman',
        job: 'Singer',
    }
    let person2 ={  
        name: 'Eva Rahman',
        job: 'Kokil konti'
      } 
const nayoks = ['Anowar', 'japor', 'razzak', 'salman']
    return (
    <div className = "App">
        <header className = "App-header">
            <img src = {logo}
            className = "App-logo"
            alt = "logo"/>
            <p>Edit 22 < code > src / App.js </code>and save to reload. </p >
            <p>My First Paragrap </p> 

            <h2 className="" style ={styleCss}>
                Name: {person.name +" is a "+ person.job}
            </h2>

            <h4 style = {{backgroundColor:'blue', border:'5px solid green', padding:'10px', }}>
                Singer: {person2.name +" is a "+ person.job}
            </h4>
            <Person name= {nayoks[0]} nayka="Mushumi"></Person>
            <Person name="Rubel hossain" nayka="Purnima"></Person>
            <Person name="Ellias hossain" nayka="shabnur"></Person>
            <Person name="salman sah" nayka="opu bisswash" ami="ami noman"></Person>
        </header>
        
    </div>
    );
}

export default App;

// Component
let style2 = {
    border: "2px solid red", boxShadow:"0px 0px 5px 5px gray", margin:"20px", padding: "20px"
}
function Person(props){
    console.log(props);
    return (
        <div style = {style2}>
            <h1>Name: {props.name } </h1>
    <h3 style = {{color:'gold'}}>Hero of {props.nayka} </h3>
        </div>
    )
}