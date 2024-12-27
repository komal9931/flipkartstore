import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Productinfo from "./components/Productinfo";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      {/* <h1>FlipKart</h1> */}
      <CartProvider>
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/productinfo/:id" element={<Productinfo />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
