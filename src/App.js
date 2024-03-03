// import logo from './logo.svg';
import './App.css';
import InputData from './components/InputData';

import { BrowserRouter } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import PincodeDetail from './components/PincodeDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<InputData />} />
        {/* <Route path="/pincode" element={ <Pincode />} /> */}
        <Route path="/detail/:pincode" element={<PincodeDetail />} />

      </Routes>

      
     
      
      
      </BrowserRouter>

      
     
    </div>
  );
}

export default App;
