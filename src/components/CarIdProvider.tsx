import React, { createContext, useContext, useState } from 'react';

interface CarIdContextType {
    carId: number | undefined;
    setCarId: (id: number | undefined) => void;
}

const CarIdContext = createContext<CarIdContextType>({
    carId: undefined,
    setCarId: () => { },
});

export const useCarId = () => {
    return useContext(CarIdContext).carId;
};

export const useSetCarId = () => {
    return useContext(CarIdContext).setCarId;
};

export const CarIdProvider = ({ children }: any) => {
    const [carId, setCarId] = useState<number | undefined>(undefined);

    return (
        <CarIdContext.Provider value={{ carId, setCarId }}>
            {children}
        </CarIdContext.Provider>
    );
};
