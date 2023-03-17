
import Allusers from "./Allusers";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adduser from "./Adduser";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import Nav from "./Nav";
import Edituser from "./Edituser";


function App() {
 
    
  return (
   <>
   <BrowserRouter>
    {/* <Adduser/> */}
    <Nav/>
      <Routes>
        
        <Route path="/all" element={<Allusers/> } />
        <Route path="/add" element={<Adduser/>} />
        <Route path="/edit/:id" element={<Edituser/>} />
        
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
