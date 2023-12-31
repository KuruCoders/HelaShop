
import Nav from './Components/NavBar/Nav';
import Navbar from './Components/NavBar/Navbar'
import { BrowserRouter } from 'react-router-dom';
import Checkout from './Pages/Checkout/Checkout';
import Products from './Pages/Products/Products';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ForgotPass from './Pages/Forgot/ForgotPass';
import UserAct from './Pages/UserAct/UserAct';
import Product from './Pages/Product/Product';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <Checkout /> */}
        {/* <Products /> */}
        {/* <Login/> */}
        {/* <Register/> */}
        <ForgotPass/>
        {/* <UserAct/> */}
        {/* <Product/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
