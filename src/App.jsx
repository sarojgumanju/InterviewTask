import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./Home/Home"
import Footer from "./components/Footer/Footer"


function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
