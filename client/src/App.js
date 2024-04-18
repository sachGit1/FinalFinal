import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import HomePage from "./pages/Home.page";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AllProvidersPage from "./pages/AllProviders.page";
import ProviderPage from "./pages/Provider.page";
import DressPage from "./pages/Dress.page";


import {
  getAllProviders,
  getProviderDetails,
} from "./redux/provider/provider.action";
import { getUserDetails } from "./redux/user/user.action";
import ProviderRegistration from "./pages/ProviderRegistration";
import ProviderLogin from "./pages/ProviderLogin";
import ProviderDashboardPage from "./components/provider/ProviderDashboardPage";
import ProviderOrders from "./components/provider/ProviderOrders";

import ProviderDresses from "./components/provider/ProviderDresses";
import OrdersPage from "./pages/Orders.page";
import { getAllReview } from "./redux/review/review.action";


import SizeGuide from "./components/SizeGuide";
import Ourteamslider from "./components/Ourteamslider";
import { Store } from "@reduxjs/toolkit";
import AboutUspage from "./pages/AboutUspage";



// PrivateRoute
const PrivateRoute = ({ children }) => {
  const provider = useSelector((state) => state.provider);
  return provider && provider.isProvider ? children : <Navigate to="/" />;
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.providerToken) dispatch(getProviderDetails());
    else if (localStorage.userToken) dispatch(getUserDetails());
    dispatch(getAllProviders());
    dispatch(getAllReview());
  }, [dispatch]);

  const navigate = useNavigate();

  const provider = useSelector((state) => state.provider);
  useEffect(() => {
    if (provider.isProvider) navigate("/provider/dashboard/orders");
  }, [provider]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/provider" element={<AllProvidersPage />} />
      <Route path="/product/:_id" element={<DressPage/>}/>

      
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/providers" element={<AllProvidersPage />} />
      <Route path="/provider/:_id" element={<ProviderPage />} />
      <Route path="/registerProvider" element={<ProviderRegistration />} />
      <Route path="/loginProvider" element={<ProviderLogin />} />
      <Route path="/size" element={<SizeGuide/>}/>

      <Route path="/team" element={<Ourteamslider/>}/>
      <Route path="/aboutus" element={<AboutUspage/>}/>
      
      <Route
        path="/provider/dashboard"
        element={
          <PrivateRoute>
            <ProviderDashboardPage />
          </PrivateRoute>
        }
      >
        <Route path="orders" element={<ProviderOrders />} />
        <Route path="dresses" element={<ProviderDresses />} />
      </Route>
    </Routes>
  );
}

export default App;
