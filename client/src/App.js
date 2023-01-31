import { useEffect, useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import setAuthToken from "./utils/setAuthToken";

import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./actions/auth";
import PrivateRoute from "./routing/PrivateRoute";
import UpdateInsurance from "./pages/UpdateInsurance";
import AddInsurance from "./pages/AddInsurance";
import Insurance from "./pages/Insurance";
import InsuranceList from "./pages/InsuranceList";
import InsuranceDetails from "./pages/InsuranceDetails";
import CarLoanCalculator from "./pages/CarLoanCalculator";
import axios from "axios";
import InsuranceType from "./pages/InsuranceListTypes";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
export const baseUrl = "http://localhost:5000"

export const getInsuranceName = (type) => {
  return type === "health"
    ? "Health Insurance"
    : type === "life"
      ? "Life Insurance"
      : type === "car"
        ? "Car Insurance"
        : type === "term"
          ? "Term Insurance"
          : type === "credit"
            ? "Credit Cards"
            : type === "car-"
              ? "Car Loans"
              : type === "personal"
                ? "Personal Loans"
                : type === "home"
                  ? "Home Loans"
                  : type === "debt"
                    ? "Debt Restructing"
                    : type;
};

export const insuranceTypes = [
  {
    name: "Car Loans",
    image: require("./assets/car-loans.png"),
    value: "car-loans",
  },
  {
    name: "Credit Cards",
    image: require("./assets/credit.png"),
    value: "credit-cards",
  },
  {
    name: "Life Insurance",
    image: require("./assets/heart.png"),
    value: "life-insurance",
  },
  {
    name: "Personal Loans",
    image: require("./assets/loan.png"),
    value: "personal-loans",
  },
];

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      store.dispatch(loadUser());
    }
  }, []);

  axios.defaults.baseURL = baseUrl
  return (
    <Provider store={store}>
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/*">
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="insurances" element={<Insurance />} />
              <Route path="insurances/:type/:bankName" element={<InsuranceType />} />
              <Route path="insurances/:type" element={<InsuranceList />} />
              <Route path="carloan" element={<CarLoanCalculator />} />
              <Route
                path="insurance-details/:id"
                element={<InsuranceDetails />}
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route
                path="dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="dashboard/add-insurance"
                element={
                  <PrivateRoute>
                    <AddInsurance />
                  </PrivateRoute>
                }
              />
              <Route
                path="dashboard/update-insurance/:id"
                element={
                  <PrivateRoute>
                    <UpdateInsurance />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Wrapper>
      </Router>
    </Provider>
  );
};

export default App;
