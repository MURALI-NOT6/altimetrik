import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import location from "../constants/location";
import bodyTypes from "../constants/bodyType";
import productInfoList from "../constants/productInfo";


export const updateCarServices = createAsyncThunk("updateCar",
    async ({ carsInfo, data, upDatedId }: { carsInfo: any, data: any, upDatedId: any }) => {
        const response = await carsInfo?.map((items: any) => {
            if (items.id === upDatedId) {
                return data;
            } else {
                return items;
            }
        });
        toast.success("Car Information Update Successfully");
        return response;
    }
);

export const productInfoServices = createAsyncThunk("productInfo",
    async () => { 
        return productInfoList;
    }
);