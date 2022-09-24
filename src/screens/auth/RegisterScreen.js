import React from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pageTitle/PageTitle';
import RegisterTab from '../../components/tabs/RegisterTab';

const RegisterScreen = () => {
    return (
        <>
           <Header/>
           <PageTitle pagesub="register" pageTitle="Sign Up"/> 
           <RegisterTab/>
        </>
    );
};

export default RegisterScreen;