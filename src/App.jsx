import './App.css'
import Dashboard from "./pages/Dashboard.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login.jsx";


function App() {
  return (
      <BrowserRouter>
          <Routes>

              <Route path="/" element = {<Login/>} />
              <Route path = "/dashboard"
                     element = {<Dashboard/>}/>
          </Routes>
      </BrowserRouter>

          );
}

export default App;
