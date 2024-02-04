import { useDispatch, useSelector } from "react-redux";
import Protected from "./components/features/auth/components/Protected";
import CartPage from "./components/pages/CartPage";
import CheckOutPage from "./components/pages/CheckOutPage";
import Home from "./components/pages/Home";
import LoginPage from "./components/pages/LoginPage";
import ProductDetailPage from "./components/pages/ProductDetailPage";
import SignupPage from "./components/pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { fetchItemsByUserIdAsync } from "./components/features/cart/cartSlice";
import { selectLoggedInUser } from "./components/features/auth/authSlice";
import PageNotFound from "./components/pages/404";
import OrderSuccessPage from "./components/pages/OrderSuccessPage";
import UserOrdersPage from "./components/pages/UserOrdersPage";
import UserProfile from "./components/features/user/components/UserProfile";
import UserProfilePage from "./components/pages/UserProfilePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <CheckOutPage />
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetailPage />,
  },{
    path: "/order-success/:id",
    element: <OrderSuccessPage />
  },
  {
    path: "/orders",
    element: <UserOrdersPage />
    
  },
  {
    path: "/profile",
    element: <UserProfilePage />
    
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser)
  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
  },[dispatch,user])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
