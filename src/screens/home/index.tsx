import React, { createContext, useEffect, useState } from 'react';
import CarList from './carList';
import { CarIdProvider } from '../../components/CarIdProvider';

const Home = () => {

    return (
        <CarIdProvider>
            <CarList />
        </CarIdProvider>
    );
};

export default Home;
