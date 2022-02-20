import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AuthProvider from './Contexts/AuthProvider';
import CourseDataProvider from './Contexts/CourseDataProvider';
import CourseDetail from './Components/CourseDetail/CourseDetail';
import Quiz from './Components/Quiz/Quiz';
import ScrollToTop from './Hooks/ScrollToTop';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/AllCategories/AllCategories';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CourseDataProvider>
          <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="coursedetail/:id" element={<CourseDetail />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="cart" element={<Cart/>}/>
            <Route path="allcategories" element={<AllCategories  />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>
          </ScrollToTop>
        </CourseDataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
