import { Route, Routes } from "react-router-dom";
import Hello from "./components/hello/Hello";
import Home from './pages/home/Home';
import NotFount from './pages/NotFound';
import Projects from './pages/projects/Projects';
import Global_Style from "./Global_Style";
import About from "./pages/about/About";
import Denied from "./pages/denied/Denied";

import { useState } from "react";
import { WinnerProvider } from "./contexts/WinnerContext"; 
import AboutProtector from "./components/protectedRoutes/AboutProtector";
import ProjectProtector from "./components/protectedRoutes/ProjectProtector";

function App() {
  const [aboutWinner, setAboutWinner] = useState(false);
  const [projectWinner, setProjectWinner] = useState(false);

  return (
    <WinnerProvider value={{aboutWinner, setAboutWinner, projectWinner, setProjectWinner}}>
      <Global_Style />
      <Routes>
        <Route exact path="/" element={<Hello />} />
        <Route path="/home" element={<Home />} />

        <Route element={<AboutProtector />}>
          <Route path="/about" element={<About />} />
        </Route>

        <Route element={<ProjectProtector />}>
          <Route path="/projects" element={<Projects />} />
        </Route>


        <Route path="/denied" element={<Denied />} />
        <Route path="*" element={<NotFount />} />
      </Routes>

    </WinnerProvider>
  )
}

export default App
