import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import Card from "./Card";
import Student from "./Student";
import Counter from "./Counter";
function App() {
  return (
   <>
   <h1>Welcome to React Class</h1>
   <Header/>
   <List/>
   <Counter/>
    <Student name="Devyani" age={20} isStudent="true"/>
    <Card/>
  <Footer/>
  
  
   </>
  );
}

export default App;
