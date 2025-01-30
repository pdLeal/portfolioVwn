import { Route, Routes } from "react-router-dom";
import Hello from "./components/hello/Hello";
import Home from './pages/home/Home';
import NotFount from './pages/NotFound';
import Projects from './pages/projects/Projects';
import Global_Style from "./Global_Style";
import About from "./pages/about/About";
import Denied from "./pages/denied/Denied";
import KC from "./pages/kc/KC";
import { useEffect, useState } from "react";
import { WinnerProvider } from "./contexts/WinnerContext";
import { KcProvider } from "./contexts/Kc.context";
import { WeakProvider } from "./contexts/WeakContext";
import AboutProtector from "./components/protectedRoutes/AboutProtector";
import ProjectProtector from "./components/protectedRoutes/ProjectProtector";
import KcProtector from "./components/protectedRoutes/KcProtector";

function App() {
  const [aboutWinner, setAboutWinner] = useState(false);
  const [projectWinner, setProjectWinner] = useState(false);
  const [usedKc, setUsedKc] = useState(false);
  const [isWeak, setIsWeak] = useState(false);

  useEffect(() => {
    const weakling = localStorage.getItem("isWeak");
    if(weakling) setIsWeak(true);
  })

  return (
    <WinnerProvider value={{ aboutWinner, setAboutWinner, projectWinner, setProjectWinner }}>
      <KcProvider value={{ usedKc, setUsedKc }}>
        <WeakProvider value={{ isWeak, setIsWeak }}>
          <Global_Style isWeak={isWeak} />
          <Routes>
            <Route exact path="/" element={<Hello />} />
            <Route path="/home" element={<Home />} />
            <Route path="/inicio" element={<Home />} />

            <Route element={<ProjectProtector />}>
              <Route path="/projects" element={<Projects />} />
              <Route path="/projetos" element={<Projects />} />
            </Route>

            <Route element={<AboutProtector />}>
              <Route path="/about" element={<About />} />
              <Route path="/sobre" element={<About />} />
            </Route>


            <Route element={<KcProtector />} >
              <Route path="/kc" element={<KC />} />
            </Route>

            <Route path="/denied" element={<Denied />} />
            <Route path="*" element={<NotFount />} />
          </Routes>
        </WeakProvider>
      </KcProvider>
    </WinnerProvider>
  )
}

export default App
