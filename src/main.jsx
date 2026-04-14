import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';



createRoot(document.getElementById('root')).render(

)
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
  </Routes>

  </BrowserRouter>
);