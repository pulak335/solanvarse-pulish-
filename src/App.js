
import './App.css';
import Home from './Pages/Home';
import './Res.css';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Staking from './Pages/Staking';
import NotFound from './Pages/NotFound';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
    <Routes>
          <Route exact path="/" element={ <Home/>}>
      </Route>
          <Route exact path="staking" element={<Staking />}>
        </Route>
          <Route path="*" element={<NotFound />}>
        </Route>
    </Routes>
  </BrowserRouter>
     
    </div>
  );
}

export default App;
