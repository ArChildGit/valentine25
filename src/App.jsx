import { Routes, Route } from "react-router-dom";

import "antd/dist/reset.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import "./assets/styles/adaptive.css";


import LoginPage from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/layout/PrivateRoute";
import Blank from "./pages/Blank";
import Orders from "./pages/Orders";
import Gallery from "./pages/Gallery";
import AuthProvider from "./providers/AuthProvider";
import Books from "./pages/Books";
import BooksBaru from "./pages/Books";
import Authors from "./pages/Authors";
import Dashboard from "./pages/Misc/Grid";
import LatihanLayout from "./pages/Misc/Layout";
import Valentine from "./pages/Valentine 2025/Valentine";
import WillYouBeMyValentine from "./pages/Valentine 2025/WillYouBeMyValentine";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/" element={<PrivateRoute component={<Dashboard />} />} /> */}
        <Route exact path="/" element={<Valentine />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route
          exact
          path="/dashboard"
          element={<PrivateRoute component={<Dashboard />} />}
        />
        <Route
          exact
          path="/latihan/grid"
          element={<PrivateRoute component={<Dashboard />} />}
        />
        <Route
          exact
          path="/latihan/layout"
          element={<LatihanLayout />}
        />
        <Route
          exact
          path="/valentine"
          element={<Valentine />}
        />
        <Route
          exact
          path="/willYouBeMyValentine"
          element={<WillYouBeMyValentine />}
        />
        <Route
          exact
          path="/orders"
          element={<PrivateRoute component={<Orders />} />}
        />
        <Route
          exact
          path="/gallery"
          element={<PrivateRoute component={<Gallery />} />}
        />
        <Route
          exact
          path="/books"
          element={<PrivateRoute component={<BooksBaru />} />}
        />
        <Route
          exact
          path="/authors"
          element={<PrivateRoute component={<Authors />} />}
        />
        <Route
          exact
          path="/categories"
          element={<PrivateRoute component={<Blank />} />}
        />
        <Route
          exact
          path="/products"
          element={<PrivateRoute component={<Blank />} />}
        />
        <Route
          exact
          path="/report-orders"
          element={<PrivateRoute component={<Blank />} />}
        />
        <Route
          exact
          path="/summary"
          element={<PrivateRoute component={<Blank />} />}
        />
        <Route
          exact
          path="/product-sales-report"
          element={<PrivateRoute component={<Blank />} />}
        />
        <Route
          exact
          path="/profile"
          element={<PrivateRoute component={<Blank />} />}
        />
        <Route
          exact
          path="/membership"
          element={<PrivateRoute component={<Blank />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
