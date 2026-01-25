/* Two Way Binding in React and Form Submission

import React, { useState } from "react";

const App = () => {

  const [username, setName] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    console.log(username);
    setName("");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={(e) => {
        SubmitHandler(e);
      }}>
        <input value={username}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-3 rounded text-xl m-5" type="text" placeholder="Enter your name" />
        <button className="px-4 py-3 rounded text-xl bg-blue-500 text-white m-5" type="submit">Submit</button>
      </form>
    </div>
  )
};

export default App; */

/* Fragments And Components in React

import React from "react";
import Navbar from "./assets/components/Navbar.jsx";

const App = () => {
  return (
    <>  
    <Navbar />    
    </>

  )
};

export default App;  */



/* Props in React Components 


import React from "react";
import Card from "./assets/components/Card.jsx";


const App =() => {

  const users =[
  {
    "name": "Aarav Sharma",
    "city": "Delhi",
    "age": 24,
    "image": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "name": "Priya Verma",
    "city": "Mumbai",
    "age": 27,
    "image": "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    "name": "Rohan Mehta",
    "city": "Ahmedabad",
    "age": 22,
    "image": "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    "name": "Sneha Iyer",
    "city": "Bengaluru",
    "age": 26,
    "image": "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    "name": "Kunal Singh",
    "city": "Pune",
    "age": 29,
    "image": "https://randomuser.me/api/portraits/men/12.jpg"
  }
]

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 p-5">
        {
          users.map((user, index) => 
            {
            return <Card key={index} user={user.name} city={user.city} age={user.age} image={user.image} />
          })
        }

      
    </div>
    </div>
  )
}

export default App;  */



/* Fetching Data from API in React 


 import React, { useState } from "react";
import axios from "axios";

const App =()=>{

  const [data, setData] = useState([]);

  const getData= async ()=>{
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
    setData(response.data);  
   }

  return (
    <div className="p-10">
      <div onClick={getData} className="bg-teal-500 p-5 rounded cursor-pointer w-max">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
        Get Data
      </button>
      <div className="p-5 mt-5 bg-gray-950"></div>
      {data.map(function(elem,idx){
        return <div key={idx} className="mb-10 border-b-2 border-gray-300 pb-5">
          <img className="h-40" src={elem.download_url} alt=""/>
          <h1 className="text-white text-xl mt-2">Author: {elem.author}</h1>
        </div>
      })}
    </div>
    </div>
  )
}

export default App;  */



/* using useEffect to Fetch Data from API in React 

import React, { useEffect, useState } from "react";
import axios from "axios";

const App =()=>{

  const [data, setData] = useState([]);

  const getData= async ()=>{
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
    setData(response.data);  
   }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="p-10">
      <div onClick={getData} className="bg-teal-500 p-5 rounded cursor-pointer w-max">
      <div className="p-5 mt-5 bg-gray-950"></div>
      {data.map(function(elem,idx){
        return <div key={idx} className="mb-10 border-b-2 border-gray-300 pb-5">
          <img className="h-40" src={elem.download_url} alt=""/>
          <h1 className="text-white text-xl mt-2">Author: {elem.author}</h1>
        </div>
      })}
    </div>
    </div>
  )
}

export default App;  */


/* React Router Dom Basic Routing in React 


import React from "react";
import { Route,Routes } from "react-router-dom";
import About from "./assets/pages/About.jsx";
import Home from "./assets/pages/Home.jsx";
import Contact from "./assets/pages/Contact.jsx";
import Product from "./assets/pages/Product.jsx";
import Header from "./assets/components_2/Header.jsx";


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route  path="/about" element ={ <About />} />
        <Route  path="/contact" element ={ <Contact />} />
        <Route  path="/product" element ={ <Product />} />
        <Route  path="/" element ={ <Home />} />
      </Routes>
      </div>
  )
}

export default App;  */

/* Context API in React


import React, { useContext } from "react";
import Header from "./assets/components_2/Header.jsx";

const App = () => {
  const data=useContext(DataContext);
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Header />
    </div>
  )
}

export default App;  */