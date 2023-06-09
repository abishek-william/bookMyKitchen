import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function AppLayout() {
  return (

   <React.Fragment>
       <Header/>
       <Body/>
       <Footer/>
   </React.Fragment>
  );
}

export default AppLayout;
