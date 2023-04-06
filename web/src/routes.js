import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import MyAccountPage from "./pages/myaccount/Myaccount";
import MyOrders from "./pages/myorders/Myorders";
import CategoriesHome from "./pages/categories/CategoriesHome"

const UrlRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minha-conta" element={<MyAccountPage />} />
        <Route path="/meus-pedidos" element={<MyOrders />} />
        <Route path="/categorias" element={<CategoriesHome />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default UrlRoutes;