import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FavouriteScreen from "../../screens/FavouriteScreen";
import HomeScreen from "../../screens/HomeScreen";
import RentDetailScreen from "../../screens/RentDetailScreen";

const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomeScreen/>}/>
                <Route exact path="/favorites" element={<FavouriteScreen/>}/>
                <Route exact path="/details/:id" element={<RentDetailScreen/>}/>
            </Routes>
        </Router>
    );
};

export default AllRoutes;