import React from 'react';
import HomeContainer from './home/home_container';
import  StreamContainer from './stream/stream_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import UploadContainer from './upload/upload_container';
import TrackShowContainer from './track/track_show_container';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path='/stream' exact component= {StreamContainer} />
      <ProtectedRoute path='/upload' exact component= {UploadContainer} />
      <ProtectedRoute path='/tracks/:id' exact component= {TrackShowContainer} />
      <AuthRoute path='/' exact component= {HomeContainer} />
    </Switch>
  </div>
);

export default App;
