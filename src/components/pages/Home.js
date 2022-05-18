import React, {useEffect, useState} from 'react';

import ReactDOM from 'react-dom';
import './Home.css';
import Navbar from "/Users/taylorbirchem/take-home/src/components/Navbar.js";
import Radio from '/Users/taylorbirchem/take-home/src/components/Radio.js';
import Graph from '/Users/taylorbirchem/take-home/src/components/Graph.js';

function Home() {
  const [year, setYear] = useState('all');

  useEffect(() => {
  document.body.style.overflow = "hidden";
}, []);
   return(
  <div>
    <Navbar {...year}/>
    <Radio year={year} setYear={setYear}/>
  </div>
  );
}

export default Home
