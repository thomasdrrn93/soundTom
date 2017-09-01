import React from 'react';
import HomeContainer from './home/home_container';
import  StreamContainer from './stream/stream_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.js';
import UploadContainer from './upload/upload_container';
import TrackShowContainer from './track/track_show_container';
import PlayBarContainer from './play_bar/play_bar_container';
import UserPageContainer from './user/user_page_container';
import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path='/stream' exact component= {StreamContainer} />
      <ProtectedRoute path='/upload' exact component= {UploadContainer} />
      <ProtectedRoute path='/tracks/:id' exact component= {TrackShowContainer} />
      <ProtectedRoute path='/users/:id' exact component= {UserPageContainer} />
      <ProtectedRoute path='/search/:query' exact component= {SearchContainer} />
      <AuthRoute path='/' exact component= {HomeContainer} />
    </Switch>
    <footer>
      <PlayBarContainer />
    </footer>
  </div>
);

export default App;
