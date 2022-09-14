import {
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom";

import Index from "@/routes/index.jsx";
import Products from "./routes/products.jsx";
import Header from "./components/header.jsx";
import NotFound from "./routes/404.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
