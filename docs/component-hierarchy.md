## Component Hierarchy

#### Auth Container
- Auth Form

#### Upload Container
- Upload Form

#### Nav Container
- Upload Container

#### Home Container
- Auth Container
- Home Page

#### StreamContainer
- NavBar Container
- SongDetail List Container
- PlayBar Container

#### UserPageContainer
- Nav Container
- SongDetail List Container
- PlayBar Container

#### SongDetail List Container
- SongDetail Container

#### SongDetail Container

#### Track Container
- Nav Container
- Comment form
- Comment Container
- PlayBar Container

## Routes
path              | component
------------------|-----------
'/'               | HomeContainer   
'/stream'         | StreamContainer    
'/users/:userid'  | UserPageContainer    
'/tracks/:trackid'| TrackPageContainer
'/upload'         | UploadContainer    
