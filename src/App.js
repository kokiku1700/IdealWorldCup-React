import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from "./component/Main";
import Food from "./component/Food";
import Animation from "./component/Animation";
import Sport from './component/Sport';

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path='' element={<Main />} />
          <Route path='/food' element={<Food />} />
          <Route path='/animation' element={<Animation />} />
          <Route path='/sport' element={<Sport />} />
      </Routes>    
    </div>
  );
}

export default App;
