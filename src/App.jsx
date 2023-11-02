import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './layahouts/Navbar'
import Home from './pages/Home'
import Header from "./layahouts/Header"
import Contact from "./pages/Contact"
import Blog from './pages/Blog'
import Html from './pages/Html'
function App() {
  return (
    <>
   <Router>
    <Header/>
   <div className="flex">
      <div className='w-70 bg-gray-200'>
        <Navbar/>
      </div>
      <div className="static md:ms-72 overflow-x-hidden">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/html' element={<Html/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
   </Router>
    </>
  )
}

export default App
