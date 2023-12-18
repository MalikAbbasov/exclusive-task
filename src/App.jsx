import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout/>}>
            <Route path="/" element={<Home/>}/> 
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
