import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import RestaurantMenu from "./pages/restaurant-menu/RestaurantMenu.js";
// import RestaurantHome from "./pages/restaurant-menu/RestaurantMenu.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Login />} />
          <Route path="./pages/restaurant-home/RestaurantHome.js" element={<RestaurantHome />} /> */}
          <Route path="/restaurant-menu" element={<RestaurantMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
