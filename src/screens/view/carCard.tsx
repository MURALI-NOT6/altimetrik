import React, { createContext, useEffect, useState } from 'react';

interface carDetailProps {
    id: number;
    imageUrl: string;
}
const CarCard = ({data}:any)=>{
    return (
        <>
         <div className=''>
            <img src={data.imageUrl} />
            <p>{data.carName}</p>
         </div>
        </>
    )
}

export default CarCard;