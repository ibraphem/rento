import Properties from '../components/apartments/Properties';
import FindHome from '../components/filter/FindHome';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import { rentData } from '../mock/rentData';

const HomeScreen = () => {
    return (
        <>
           <Header/> 
           <Hero/>
           <FindHome/>
           <Properties rentData={rentData} title="Apartment"/>
        </>
    );
};

export default HomeScreen;