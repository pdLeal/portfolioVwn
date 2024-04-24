import { Route, Routes } from "react-router-dom";
import Hello from "./components/hello/Hello";
import Home from './pages/home/Home';
import NotFount from './pages/NotFound';
import Projects from './pages/Projects';
import Global_Style from "./Global_Style";


function App() {

  return (
    <>
      <Global_Style />
      <Routes>
        <Route exact path="/" element={<Hello />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        
        <Route path="*" element={<NotFount />} />
      </Routes>
      
    </>
  )
}

export default App
