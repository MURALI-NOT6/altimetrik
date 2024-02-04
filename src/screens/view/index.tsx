import React, { useEffect, useState } from 'react';
import FilerSection from './filerSection';
import { useAppSelector } from '../../store/hooks';
import CarCard from './carCard';

const ViewScreen = () => {
    const productInfo = useAppSelector((state: any) => state?.productInfo?.data); 
    const [carList, setCarList] = useState([]);
    const [filter, setFilter] = useState<any>({});

    useEffect(()=>{
        setCarList(productInfo)
    },[]) 

    useEffect(() => {   
        if (Object.keys(filter).length > 0 && productInfo?.length > 0) {   
            const filteredProducts = productInfo.filter((product:any) => {
                return Object.entries(filter).every(([key, value]) => { 
                    return product[key] == value;
                });
            });            
            setCarList(filteredProducts);
        }  
    }, [filter, productInfo]);    

    return <>
        <div className='viewScreen'>
            <FilerSection setFilter={setFilter} filter={filter} />
            <div className='poductList'>
                <div className='cardView'>
                    {carList && carList?.map((list, index) => {
                        return (
                            <div key={index} className='carInfoCard'>
                                <CarCard data={list} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
}

export default ViewScreen;