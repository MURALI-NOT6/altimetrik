import Select from "react-dropdown-select";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import location from "../../constants/location";
import { productInfoServices } from "../../services/updateServices";
import bodyTypes from "../../constants/bodyType";


const FilerSection = ({ setFilter, filter }: any) => {  
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(productInfoServices());
    }, []) 

    return (
        <div className="filerSection">
            <h5>Filters</h5>
            <div className="mt-4">
                <h6>Location</h6>
                <Select
                    options={location}
                    labelField="name"
                    valueField="id"
                    onChange={(values) => {
                        setFilter({
                            ...filter,
                            "location": values[0]?.name,
                        })
                    }}
                    values={[]}
                />
            </div>
            <div className="mt-4">
                <h6>Body Type</h6>
                <Select
                    options={bodyTypes}
                    labelField="name"
                    valueField="id"
                    searchable={true}
                    onChange={(values) => {
                        setFilter({
                            ...filter,
                            "bodytype": values[0]?.name,
                        })
                    }}
                    values={[]}
                />
            </div>
        </div>
    );
}

export default FilerSection;
