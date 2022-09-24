import React from 'react';
import Properties from '../components/apartments/Properties';
import Header from '../components/header/Header';
import PageTitle from '../components/pageTitle/PageTitle';
import RentDetails from '../components/rentDetails/RentDetails';
import { rentData } from '../mock/rentData';

const RentDetailScreen = () => {
    return (
        <>
            <Header/>
            <PageTitle pagesub="Details" pageTitle="2 Bedroom Flat In Ikeja"/>
            <RentDetails/>
            <Properties rentData={rentData} title="Related Properties" />
        </>
    );
};

export default RentDetailScreen;