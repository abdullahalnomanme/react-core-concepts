import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let person = {
        name: 'Dr. Mahfujur Rahman',
        job: 'Singer',
    }
    let person2 ={  
        name: 'Eva Rahman',
        job: 'Kokil konti'
      } 
      var style ={
          color:'red',
          backgroundColor:'gray',
          border:'5px solid red',
          padding:'10px',
          borderRadius:'10px',
      }
    return (
    <div className = "App">
        <header className = "App-header">
            <img src = {logo}
            className = "App-logo"
            alt = "logo"/>
            <p>Edit 22 < code > src / App.js </code>and save to reload. </p >
            <p>My First Paragrap </p> 

            <h2 className="" style ={style}>
                Name: {person.name +" is a "+ person.job}
            </h2>

            <h4 style = {{backgroundColor:'blue', border:'5px solid green', padding:'10px', }}>
                Singer: {person2.name +" is a "+ person.job}
            </h4>
        </header>
        
    </div>
    );
}

export default App;