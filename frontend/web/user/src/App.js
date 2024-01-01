
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './Pages/Checkout/Checkout';
import Products from './Pages/Products/Products';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ForgotPass from './Pages/Forgot/ForgotPass';
import Product from './Pages/Product/Product';
import NotFound from './Pages/Error/NotFound';
import Profile from './Pages/MyProfile/Profile';
import Main from './Pages/Main/Main';
import Act from './Pages/MyProfile/Account/Act';
import Bills from './Pages/MyProfile/Billing/Bills';
import Notification from './Pages/MyProfile/Notification/Notification';
import Privacy from './Pages/MyProfile/Privacy/Privacy';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/forgot' element={<ForgotPass />} />
          <Route path='/main' element={<Main/>}>
            <Route index element={<Products/>} />
            <Route path='products' element={<Products/>} />
            <Route path='product/:id' element={<Product/>} />
            <Route path='checkout' element={<Checkout/>} />
            {/* <Route path='/about' element={<Product/>} /> */}
          </Route>
          <Route path='profile' element={<Profile/>}>
            <Route index element={ <Act/> } />
            <Route path='account' element={ <Act/> } />
            <Route path='bill' element={ <Bills/> } />
            <Route path='notification' element={ <Notification/> } />
            <Route path='privacy' element={ <Privacy/> } />
          </Route>
          <Route path='*' element={ <NotFound/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
