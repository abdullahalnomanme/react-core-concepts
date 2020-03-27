import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function App() {
    // app css 

    const styleCss ={
        color:'#fff',
        backgroundColor:'gray',
        border:'5px solid red',
        padding:'10px',
        borderRadius:'10px',
    }
    // app variable 
    let person = {
        name: 'Abdullah Al Noman',
        job: 'web developer',
    }
    let person2 ={  
        adj: 'he work',
        place: 'fiverr.com'
      } 

    //   app const 
const nayoks = ['Anowar','japor','razzak', 'salman']

const nayokName = nayoks.map(result => result)
console.log(nayokName);


const nayoks2 = [
    {name:'Anowar', job:'japor', ami:'razzak', k:'salman'}
]

console.log(nayoks2);

const prices = [
    {title:"Photoshop", priceUS:"US $20.99/mo", priceDesc:"Create Beautiful Graphics, photos and art anywhere.", priceBtn:"See Plan & Pricing details"},

    {title:"InDesign", priceUS:"US $20.99/mo", priceDesc:"Create Beautiful Graphics, photos and art anywhere.", priceBtn:"See Plan & Pricing details"},

    {title:"Adobe Xd", priceUS:"US $20.99/mo", priceDesc:"Create Beautiful Graphics, photos and art anywhere.", priceBtn:"See Plan & Pricing details"},

    {title:"Adobe Premiur", priceUS:"US $20.99/mo", priceDesc:"Create Beautiful Graphics, photos and art anywhere.", priceBtn:"See Plan & Pricing details"}

];

const product = [
    {productTitle:"Photoshop", productPrice:"US$20.99/mo", productDesc:"Lorem ipsum dolor sit amet.", productBtn:"Buy Now"},

    {productTitle:"Illustrator", productPrice:"US$10.99/mo", productDesc:"Lorem ipsum dolor sit amet.", productBtn:"Buy Now"}

];
    return (
    <div className = "App">
        <header className = "App-header">
<ul>
{
    nayoks.map(result => <li>{result}</li> )

}
</ul>
            {
            /* body content start  */}
            <img src = {logo}
            className = "App-logo"
            alt = "logo"/>
            <p>Edit 22 < code > src / App.js </code>and save to reload. </p >

            <h2 className="" style ={styleCss}>
                Name: {person.name +" is a "+ person.job}
            </h2>

            <h4 style = {{backgroundColor:'blue', border:'5px solid green', padding:'10px', }}>
                Singer: {person2.adj +" in "+ person2.place}
            </h4>

                {/* priceing box area content */}

            <div className="price-area">
                {
                    prices.map(result => <Pricing priceList = {result}></Pricing>)
                }
                
                {/* <Pricing priceList = {prices[1]}></Pricing>
                <Pricing priceList = {prices[2]}></Pricing>
                <Pricing priceList = {prices[1]}></Pricing> */}
            </div>


            <Person name= {nayoks[0]} nayka="Mushumi"></Person>
            <Person name="Rubel hossain" nayka="Purnima"></Person>
            <Person name="Ellias hossain" nayka="shabnur"></Person>
            <Person name="salman sah" nayka="opu bisswash" ami="ami noman">
            </Person>

                {/* Product-area  content*/}
            <div className="product-area" style={{width:"100%"}}>
                <Product product = {product[0]}></Product>
                
                <Product product = {product[1]}></Product>
                <Product product = {product[0]}></Product>
                <Product product = {product[1]}></Product>
            </div>

            <div>
                <Counter></Counter>
            </div>
            <div>
                <Users></Users>
            </div>
{/* body content End  */}
        </header>
        
    </div>

    );
}
export default App;

// Component
let style2 = {
    border: "2px solid red", boxShadow:"0px 0px 5px 5px gray", margin:"20px", padding: "20px"
}

// person function 
function Person(props){

    return (
        <div style = {style2}>
            <h1>Name: {props.name } </h1>
    <h3 style = {{color:'gold'}}>Hero of {props.nayka} </h3>
        </div>
    )
}

// Pricing function 

function Pricing(price){

    // pricing style 
    const pricingBox = {
        border: "3px solid red",
        padding: "1%",
        margin: "1%",
        backgroundColor: "gray",
        boxShadow: "0 0 5px 5px",
        maxWidth: "20%",
        float: "left"
    }
    const pricingBoxBtn = {
        color: "#000",
        fontWeight: "700",
        textDecoration: "none",
    }

return(

    <div className="pricing" style = {pricingBox}>
        <h4>{price.priceList.title}</h4>
        <h2>{price.priceList.priceUS}</h2>
        <p>{price.priceList.priceDesc}</p>
        <a href="" style = {pricingBoxBtn}>{price.priceList.priceBtn}</a>
    </div>

)



}

// product box area 
function Product(props){
    const productBox = {
        border: "3px solid blue",
        padding: "1%",
        margin: "1%",
        backgroundColor: "gray",
        boxShadow: "0 0 5px 5px",
        maxWidth: "20%",
        float: "left"
    }
    const productbtn = {
            float: "right",
            fontSize: "18px",
            fontWeight: "700",
            color: "gold",
            backgroundColor: "#333",
            border: "1px solid",
            padding: "5px",
            cursor:"pointer"

    }
    const {productTitle, productPrice, productDesc, productBtn} = props.product;
    return(
        <diV style = {productBox}>
            <h3>{productTitle}</h3>
            <h2>{productPrice}</h2>
            <p>{productDesc}</p>
            <button style={productbtn}>{productBtn}</button>
        </diV>
    )
}

function Counter(){
    const [count, setCount] = useState(10)
    const increace = () => setCount(count+1);
    return(
        <div>
            <h1>Count: {count}</h1>
            <button  onClick={() => setCount(count-1)} style ={{float: "left",fontSize: "18px",fontWeight: "700",color: "gold",backgroundColor: "#333",border: "1px solid", padding: "5px", margin:"5px", cursor:"pointer"}}>decreace</button>
            <button onClick={() => setCount(count+1)} style ={{float: "left",fontSize: "18px",fontWeight: "700",color: "gold",backgroundColor: "#333",border: "1px solid", padding: "5px", margin:"5px", cursor:"pointer"}}>increace</button>
        </div>
    )
}

function Users(){

    const [users, setUSers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUSers(data))
    },[])
    return(
        <div className="user">
            <h3>User Name: {users.length}</h3>
           <ol>
               {
                   users.map(user => <li>{user.name}</li>)
               }
           </ol>
        </div>
    )
}