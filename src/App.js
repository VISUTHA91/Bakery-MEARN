// import './App.css';
// import Baking from './Componenets/Baking';
import Birthday from './Componenets/Birthday';
// import Carosel from './Componenets/Carosel';
// import Details from './Componenets/Details';
// import Footer from './Componenets/Footer';
import { NavBar } from "./Componenets/NavBar";
// import Trending from './Componenets/Trending';
// import Wedo from './Componenets/Wedo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componenets/Home";
// import Adminpage from './Componenets/Adminpage';
import Admin from './Componenets/Admin';
import Login from './Componenets/Login';
import Wedding from './Componenets/Wedding';
import Car from './Componenets/Car';
import Kids from './Componenets/Kids';
import Photo from './Componenets/Photo';
import Signup from './Componenets/Signup';

function App() {
  return (
    <div className="App">
      {/* <Admin /> */}
      {/* <Adminpage /> */}
      <NavBar />
       <BrowserRouter>
        <Routes>
          <Route>
            <Route index element = {<Home />} /> 
            <Route path="/Home" element={<Home />} />
            <Route path="/Birthday" element={<Birthday />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Wedding" element={<Wedding />} />
            <Route path="/Car" element={<Car />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/Photo" element={<Photo />} />
            <Route path="/Signup" element={<Signup />} />

          </Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
