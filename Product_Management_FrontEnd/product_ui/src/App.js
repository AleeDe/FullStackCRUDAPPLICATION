import './App.css';
import Navbar from './component/Navbar';
import { Route , Routes } from 'react-router-dom';
import AddProduct from './component/AddProduct';
import Home from './component/Home';
import EditProduct from './component/EditProduct';


function App() {
  return(
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addproduct' element={<AddProduct/>}></Route>
      <Route path='/editproduct/:id' element={<EditProduct/>}></Route>
    </Routes>
    </>
  );
}

export default App;
