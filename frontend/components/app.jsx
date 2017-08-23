import React from 'react';
import HomeContainer from './home/home_container';
import  StreamContainer from './stream/stream_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import UploadContainer from './upload/upload_container';

const App = () => (
  <div>
    <AuthRoute path='/' exact component= {HomeContainer} />
    <ProtectedRoute path='/stream' exact component= {StreamContainer} />
    <ProtectedRoute path='/upload' exact component= {UploadContainer} />
  </div>
);

export default App;
