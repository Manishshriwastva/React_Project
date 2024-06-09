import React from 'react';
import Navv from './Navv';
import Header from './Header';
import Footer from './Footer';

function Layoutt({children}) {
  return (
    <>

      <Navv />
      <Header/> <br /><br />
      {children}

      <Footer/>
    </>
  );
}

export default Layoutt;