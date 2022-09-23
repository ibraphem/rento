import React from 'react';
import Header from '../components/header/Header';
import PageTitle from '../components/pageTitle/PageTitle';
import RentDetails from '../components/rentDetails/RentDetails';

const RentDetailScreen = () => {
    return (
        <>
            <Header/>
            <PageTitle pagesub="Details" pageTitle="2 Bedroom Flat In Ikeja"/>
            <RentDetails/>
        </>
    );
};

export default RentDetailScreen;