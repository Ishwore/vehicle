import './App.css';
import Navbar from './components/Navbar';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
