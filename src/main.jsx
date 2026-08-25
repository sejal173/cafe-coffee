import { createRoot } from 'react-dom/client';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import OurServices from './views/OurServices/OurServices';
import NotFound from './views/NotFound/NotFound';
import Login from './views/Login/Login';
import SignIn from './views/SignIn/SignIn';
import { BrowserRouter ,Route,Routes } from 'react-router';
import { Import } from 'lucide-react';
import Footer from './components/Footer/Footer';
import BodyContainer from './components/BodyContainer/BodyContainer';



const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/ourservices' element={<OurServices/>}></Route>
      <Route path='/*' element={<NotFound/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
    </Routes>

  
  </BrowserRouter>

  
)
