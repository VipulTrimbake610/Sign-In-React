import {useState } from 'react';

import './index.css'
import Profile from './Components/Profile';
import Signup from './Components/Signup';

function App() {
  let [statuss, setStatuss] = useState(false);
  return (
    <>
    {
      console.log(statuss)
    }
    {
      statuss===false && <Signup status={setStatuss}/>
    }
    {
      statuss===true && <Profile status={setStatuss}/> 
    }
    </>
  );
}

export default App;
