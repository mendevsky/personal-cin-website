import React from 'react'
import Home from '../components/sections/Home'
import NavigationBar from '../components/NavigationBar';

function MainHome() {
  return (
    <div>
        <NavigationBar/>
        <div className= "mt-16">
            <Home />
        </div>

    </div>
  );
}  

export default MainHome;