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
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function App() {
  const stripePromise = loadStripe('pk_test_51KVpuCIKMgAbdTMPUw8kiLqO37bzqZ6cQmmERtdlFqeDNmD8ddI93NfZ2rrdIvY5qdmKedq83vagoJKpIXZovuzv00Mf8M56uZ');
  return (
    <BrowserRouter>
      <AuthProvider>
        <CourseDataProvider>
          <Elements stripe={stripePromise}>
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="coursedetail/:id" element={<CourseDetail />} />
                <Route path="quiz" element={<Quiz />} />
                <Route path="cart" element={<Cart />} />
                <Route path="allcategories" element={<AllCategories />} />
                <Route path="checkout" element={<Checkout />} />
              </Routes>
            </ScrollToTop>
          </Elements>
        </CourseDataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
