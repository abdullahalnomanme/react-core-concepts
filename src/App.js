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
    return (
    <div className = "App">
        <header className = "App-header">
            <img src = {logo}
            className = "App-logo"
            alt = "logo"/>
            <p>Edit 22 < code > src / App.js </code>and save to reload. </p >
            <p>My First Paragrap </p> 

            <h2>
                Name: {person.name +" is a "+ person.job}
            </h2>

            <h4>
                Singer: {person2.name +" is a "+ person.job}
            </h4>
        </header>
        
    </div>
    );
}

export default App;