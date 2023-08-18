import About from "./Component/About";
import Contact from "./Component/Contact";
import User from "./Component/User";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <Header/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/user/:id" element={<User/>} />  
    </Routes>
    <Footer/>
      
    </Router>
      
  );
}

export default App;
