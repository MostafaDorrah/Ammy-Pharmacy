import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage1 from "./pages/ProductPage1";
import Cart_main from "./pages/Cart_main";
import Register from "./pages/Register";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Product from "./components/Product";
import Axios from "./pages/Axios";
import Check from "./pages/Check";
import Input from "./components/Input";
import Order_main from "./pages/Order_main";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import Seatch from "./components/Seatch";


function App() {
  return (
    <div
      className="App"
      style={{
        //backgroundImage: `url(https://www.usnews.com/dims4/USNEWS/156753e/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fcb%2Fec%2Fda396c7740fabd904c46abc7824b%2F181113-pharmacist-editorial.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "200h",
        backgroundColor: "#CBEDD5",
      }}
    >
      <Router>
        <div className="App">
          <div className="content">
            <Routes>
              <Route path="/Home/:id_user" element={<Home />} />
              {/* <Route path="/Home" element={<Home />} /> */}
              <Route
                path="/CategoryPage/:id_user/:categor"
                element={<CategoryPage />}
              />
              <Route
                path="/ProductPage/:id_user/:id_comp"
                element={<ProductPage1 />}
              />
              <Route path="/Cart/:id_user" element={<Cart_main />} />
              <Route path="/order/:id_user" element={<Order_main />} />
              <Route path="/search/:id" element={<Seatch />} />
              <Route path="/" element={<Register />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/loginAdmin" element={<AdminLogin />} />
              <Route path="/admin/:id_ad" element={<Admin />} />
              <Route path="/Product/:id_user/:id_comp" element={<Product />} />
              <Route path="/Input/:id_user" element={<Input />} />
              <Route path="/Checkout1/:id_user/:total" element={<Check />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
      {/* <Home /> */}
      {/* <CategoryPage /> */}
      {/* <ProductPage /> */}
      {/* <Cart/> */}
      {/* <Register /> */}
      {/* <SignUp/> */}
      {/* <Checkout1/> */}
    </div>
  );
}

export default App;
