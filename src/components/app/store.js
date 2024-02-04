import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/product-list/ProductSlice";
import authSlice from "../features/auth/authSlice";
import cartSlice from "../features/cart/cartSlice";
import orderSlice from "../features/order/orderSlice";
import userSlice from "../features/user/userSlice";
const store = configureStore({
  reducer: {
    product: ProductSlice,
    auth: authSlice,
    cart: cartSlice,
    order:orderSlice,
    user: userSlice

  },
});

export default store;
