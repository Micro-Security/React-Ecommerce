import './App.css';
import { Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Register from './Components/Register';
import Login from './Components/Login';
import Purchase from './Components/Purchase';
import Edit from './Components/Edit';
import Profile from './Components/Profile';
import Product from './Components/Product';
import Logout from './Components/Logout';

function App() {
  return (
    <>
    <Navbar/>
       <Route exact path="/">
         <Products/>
       </Route>
       <Route  path="/Cart">
         <Cart/>
       </Route>
       <Route  path="/Register">
         <Register/>
       </Route>
       <Route  path="/Login">
         <Login/>
       </Route>
       <Route path="/Edit">
         <Edit/>
       </Route>
       <Route  path="/Purchase">
         <Purchase/>
       </Route>
       <Route  path="/Profile">
         <Profile/>
       </Route>
       <Route  path="/Product/:id">
         <Product/>
       </Route>
       <Route  path="/Logout">
         <Logout/>
       </Route>
       
    </>
  );
}

export default App;
