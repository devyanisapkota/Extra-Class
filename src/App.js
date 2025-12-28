import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./Login"
import Bmi from "./Bmi"
import Temperature from "./Temperature"
import Joke from "./Joke"
import Card from "./Card"


function App(){

  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/bmi" element={<Bmi/>}/>
    <Route path="/temperature" element={<Temperature/>}/>
    <Route path="/joke" element={<Joke/>}/>
    <Route path="/card" element={<Card/>}/>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
