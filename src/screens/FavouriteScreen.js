import React from 'react';
import { useSelector } from 'react-redux';
import Properties from '../components/apartments/Properties';
import Error from '../components/error/Error';
import Header from '../components/header/Header';
import PageTitle from '../components/pageTitle/PageTitle';
import { rentData } from '../mock/rentData';

const FavouriteScreen = () => {
    const favRent = useSelector((state) => state?.favoriteRent?.rent);
    return (
        <>
            <Header/>
            <PageTitle pagesub="Favourites" pageTitle="Favorite Apartments"/>
            {favRent?.length > 0 ? (
                <>
                      <Properties rentData={favRent} title="Your Favorites" isfavScreen={true}/>
                      <Properties rentData={rentData} title="Related Properties" />
                      </>
            ): (
                <Error errorTitle="No Favorites was found" errorDesc="We couldn't do find any property on your list of favorites. Browse through our enlisted property lists and and some to favorite."/>
            )}
      
        </>
    );
};

export default FavouriteScreen;