import React, {useState} from 'react';
import './Navbar.css';



function Navbar() {
  const [year, setYear] = useState("All");
   return(
    <div>
    <nav className = "navbar">
      <div className = "navbar-container navbar-header" >
          Students by Course {year}
      </div>
    </nav>
  </div>
  );
}

export default Navbar
