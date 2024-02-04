import React, { createContext, useEffect, useState } from 'react';
import UpdateForm from './updateForm';
import { useAppSelector } from '../../store/hooks';
import { useCarId, useSetCarId } from '../../components/CarIdProvider';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

interface CarProps {
    id: number;
    logo: string;
    name: string;
}

const CarList = () => {
    const carsInfo = useAppSelector((state: any) => state?.updateCarInfo?.data);
    const [carsDetails, setCarsDetails] = useState<CarProps[]>([]);
    const [updateModel, setUpdateModel] = useState<boolean>(false);
    const setCarId = useSetCarId();

    const updateInfo = (id: any) => {
        setCarId(id)
        setUpdateModel(true);
    }

    useEffect(() => {
        setCarsDetails(carsInfo);
    }, [carsInfo]);

    return (
        <>
            <Helmet>
                <title>Car</title>
            </Helmet>
            <div className='carList'>
                {carsDetails?.map((car, index) => (
                    <div key={index} className='carCard' >
                        <div className='info'>
                            <img className='carImage' src={car.logo} alt={car.name} onClick={() => updateInfo(car?.id)} />
                            <h6>{car.name}</h6>
                            <Link to={"/view"} className='viewAction'>View More</Link>
                        </div>
                    </div>
                ))}
            </div>
            {updateModel && <UpdateForm setModel={setUpdateModel} />}
        </>
    );
};

export default CarList;
