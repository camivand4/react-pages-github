import './App.css';
import { Route, Routes } from 'react-router-dom';

/**
 * Import components
 */
import Navbar from './components/Navbar';

/**
 * Import pages
 */
import Home from './pages/Home';
import Test from './pages/Test';
import Second from './pages/Second';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/second' element={<Second />} />
      </Routes>
    </div>
  );
}

export default App;
