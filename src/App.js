import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Calender from "./Components/Pages/Calender/Calender";
import Completed from "./Components/Pages/Completed/Completed";
import Home from './Components/Pages/Home/Home';
import NotFound from "./Components/Pages/NotFound/NotFound";
import Todo from "./Components/Pages/Todo/Todo";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/home" element={<Home/>} />
        <Route  path="/todo" element={<Todo/>} />
        <Route  path="/completed" element={<Completed/>} />
        <Route  path="/calender" element={<Calender/>} />
        <Route  path="*" element={<NotFound/>} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
