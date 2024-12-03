import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Body from './components/body/Body';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
