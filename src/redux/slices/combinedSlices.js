import { combineReducers } from 'redux';
import favouriteRentSlice from './favouriteRentSlice';


const combinedSlices = combineReducers({
    favoriteRent: favouriteRentSlice,

});

export default combinedSlices;
