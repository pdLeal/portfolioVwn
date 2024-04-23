import { Route, Routes } from "react-router-dom";
import Hello from "./components/hello/Hello";
import Home from './pages/Home';
import NotFount from './pages/NotFound';
import Global_Style from "./Global_Style";


function App() {

  return (
    <>
      <Global_Style />
      <Routes>
        <Route exact path="/" element={<Hello />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
      
    </>
  )
}

export default App
