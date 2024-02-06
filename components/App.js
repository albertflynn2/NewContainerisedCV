import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { appStyle } from './AppStyles';

function App() {
  return (
    <div style={appStyle}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;