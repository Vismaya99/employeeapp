import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import Form from './Components/Form';


function App() {
  return (
   
   <BrowserRouter>
   <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/form' exact element={<Form/>}/>
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;
