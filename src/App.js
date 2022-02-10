import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AuthProvider from './Contexts/AuthProvider';
import DataProvider from './Contexts/DataProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
