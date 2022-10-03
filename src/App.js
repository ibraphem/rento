import "./App.css"
import ReduxModalsIndex from './components/modals/ReduxModalsIndex';
import AllRoutes from './components/router/AllRoutes';

const App = () => {

  return (
    <div className='wrapper'>
      <AllRoutes/>
      <ReduxModalsIndex/>
    </div>
  );
};

export default App;