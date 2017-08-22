import React from 'react';
import HomeContainer from './home/home_container';
import  StreamContainer from './stream/stream';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

const App = () => (
  <div>
    <AuthRoute path='/' exact component= {HomeContainer} />
    <ProtectedRoute path='/stream' exact component= {StreamContainer} />
  </div>
);

export default App;
