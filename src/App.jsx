import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Somme from './Somme'
import Accueil from "./Accueil"
import Html from './pages/Html'
import Blog from './pages/Blog'
import Css from './pages/Css'

function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Accueil/>}/>
      <Route path='/somme' element={<Somme/>}/>
      <Route path="/somme/html" element={<Html/>}/>
      <Route path='/somme/blog' element={<Blog/>}/>
      <Route path='/somme/css' element={<Css/>}/>
    </Routes>
   
   </Router>
    </>
  )
}

export default App
