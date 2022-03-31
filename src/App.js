import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route,  Routes } from 'react-router-dom';
import OrderReview from './Components/OrderReview/OrderReview';

function App() {

  AOS.init();
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/order" element={<OrderReview></OrderReview>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
