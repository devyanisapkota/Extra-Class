import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./Login"
import Bmi from "./Bmi"
import Temperature from "./Temperature"
import Joke from "./Joke"
import Header from "./Header"
import Footer from "./Footer"

function App(){

  return (
   <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/bmi" element={<Bmi/>}/>
    <Route path="/temperature" element={<Temperature/>}/>
    <Route path="/joke" element={<Joke/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
    </>
  );
}

export default App;
