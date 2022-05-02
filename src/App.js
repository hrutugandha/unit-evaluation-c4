import './App.css';
import {Routes,Route} from 'react-router-dom'

import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrders";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtectedRoute";
import {Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/Login" element={<Login/>}></Route>
       <Route path="/Logout" element={<Logout/>}></Route>
       <Route path="/newOrder" element={<NewOrder/>}></Route>
       <Route path="/ProtectedRoute" element={<ProtectedRoute/>}></Route>
       <Route path="/Orders" element={<Orders/>}></Route>
     </Routes>
    </div>
  );
}

export default App;