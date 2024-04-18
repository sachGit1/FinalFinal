import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.reducer";
import providerSlice from "./provider/provider.reducer";
import productSlice from "./product/product.reducer";
import orderSlice from "./order/order.reducer";
import reviewSlice from "./review/review.reducer";


 

export const store = configureStore({
  reducer: {
    user: userSlice,
    provider: providerSlice,
    products: productSlice,
    orders: orderSlice,
    reviews: reviewSlice,
   
  },
});
