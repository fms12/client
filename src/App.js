import CartPage from "./components/pages/CartPage";
import Home from "./components/pages/Home";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/login',
    element :<LoginPage />
  },{
    path: "/signup",
    element: <SignupPage />
  },{
    path: "/cart",
    element: <CartPage />
  }
   
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
