
import {Routes, Route, Link, ScrollRestoration} from 'react-router-dom';
import {Lay} from './components/Lay';
import { SecondPage } from './SecondPage';
import { ThreePage } from './ThreePage';
import { FourPage } from './FourPage';
import { FirstPage } from './firstPage';
import { useDispatch } from 'react-redux';
import { fetchAuth } from './redux/slice/sliceAuth';
import React from 'react';


function App() {
  const dispatch = useDispatch();

React.useEffect( () => {
  const defaultParams = {email: "mapUser@gmail.com", password: 12345678}
  dispatch(fetchAuth(defaultParams))
}, [])
  return (
    
      
      <div className="wrapperSecond">
      
        <Routes>
            <Route path = "/" element ={<Lay/>}> 
            <Route index element = {<FirstPage/>} />
            <Route path='SecondPage' element = {<SecondPage/>} />
            <Route path='ThreePage' element = {<ThreePage/>} />
            <Route  path='FourPage' element = {<FourPage/>}  />
            </Route>  
            
        </Routes>  
        
        </div>
      
      
  );
}

export default App;
