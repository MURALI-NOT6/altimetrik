import { createSlice } from "@reduxjs/toolkit";
import { productInfoServices, updateCarServices } from "../services/updateServices";
import product from "../constants/productInfo";

interface stateType {
    data: null | any,
}

const productInfo: stateType = {
    data: product,
};

export const productInfoSlice = createSlice({
    name: "productInfo",
    initialState: productInfo,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(productInfoServices.pending, (state, action) => {
                state.data = null;
            })
            .addCase(productInfoServices.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(productInfoServices.rejected, (state, action) => {
                state.data = null;
            });
    },
});

export default productInfoSlice.reducer;