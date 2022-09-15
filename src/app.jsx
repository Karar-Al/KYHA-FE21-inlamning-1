import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./routes/index.jsx";
import Products from "./routes/products.jsx";
import Header from "./components/header.jsx";
import Checkout from "./routes/checkout.jsx";
import Order from "./routes/order.jsx";
import NotFound from "./routes/404.jsx";

function App() {
  /**
   * If this was a real app, I'd consider using a context here and load it up with user info,
   * like their cart details.
   */

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
