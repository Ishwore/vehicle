import './App.css';
import Navbar from './components/Navbar';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './screens/LoginScreen'
import SignUp from './screens/SignUpScreen'
import AddCategory from './screens/AddCategoryScreen';
import AddVehicle from './screens/AddVehicleScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<h1>Product Listing Componet</h1>} />
          <Route path='/addvehicle' element={<AddVehicle />} />
          <Route path='/addcategory' element={<AddCategory />} />
          <Route path='/aboutus' element={<h1>About pages</h1>} />
          <Route path='/contact' element={<h1>Contactus page</h1>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
