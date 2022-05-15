import Layout from 'components/layout/Layout';
import Country from 'pages/Country';
import Home from 'pages/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="country" element={<Country />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
