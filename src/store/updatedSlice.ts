import { createSlice } from "@reduxjs/toolkit";
import { updateCarServices } from "../services/updateServices";
import carsInfo from "../constants/carInfo";

interface stateType {
    data: null | any,
}

const updateCarInfo: stateType = {
    data: carsInfo
};

export const addAdminSlice = createSlice({
    name: "updateCarInfo",
    initialState: updateCarInfo,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(updateCarServices.pending, (state, action) => {
                state.data = null;
            })
            .addCase(updateCarServices.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(updateCarServices.rejected, (state, action) => {
                state.data = null;
            });
    },
});

export default addAdminSlice.reducer;