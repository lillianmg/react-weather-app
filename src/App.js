import React from "react";
import Weather from "./Weather";
import './index.css';
import './App.css';

export default function App() {
  return ( 
  <div className="App">
    <div className="container"></div>
 <Weather defaultCity="New York" />
<footer>Weather App created by Lillian Gil and is{" "}<a
 href="https://github.com/lillianmg"
 target="_blank"
>
open-sourced on GitHub
</a>
   </footer>
 </div>
  );
} 