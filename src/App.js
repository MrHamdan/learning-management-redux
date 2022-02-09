import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AuthProvider from './Contexts/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
