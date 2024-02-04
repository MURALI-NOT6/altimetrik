import { configureStore, ThunkAction, Action, } from "@reduxjs/toolkit"; 
import updateCarInfo from "./updatedSlice";
import productInfo from "./productSlice";
 
export const store = configureStore({
  reducer: {
    updateCarInfo: updateCarInfo,
    productInfo: productInfo,
  },
});
 
export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction< ReturnType, RootState, unknown, Action<string>>;