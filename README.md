# SoundTom

[link](https://soundtom.herokuapp.com/#/tracks/45)

SoundTom is a full stack web application clone of the site SoundCloud. SoundTom was built using Ruby on Rails for the backend, a PostgreSQL database, and react.js with redux for the frontend.

## Features

### Player

![Alt text](/app/assets/images/player.png)

The main feature of SoundTom is the audio player. The audio player plays continuously on throughout SoundTom. A user can sign in, browse the site and log out all while listening to the same song. The audio player functions by keeping track of the playing slice of state. If an user hits play on any song throughout the site, the playing slice of state is updated to keep track of the current song, whether it is playing or paused, and all songs waiting to be played in the queue. The audio player updates its position as the song plays. When clicked, the progress bar is updated with the following lines of code.

![Alt text](/app/assets/images/code1.png)

### Song CRUD

After logging in, users are taken to a stream page. The stream page features tracks that are fetched from the database. Track audio files are hosted on Amazon Web Services and are attached using the Ruby gem paperclip. Each track has a show page where users can comment on that track. Users are able to delete and edit their own tracks. Below is an example of a song show page.

![Alt text](/app/assets/images/songpage.png)

### User Show Page

 Each user has their own user show page with has an index of all that user's particular tracks. Upon, rendering a request is made to the backend to fetch of all user's particular tracks.   

## Future Steps  

### Updated Search

I would like to improve the search function so that users can see a drop down bar of possible search results as they input their search.

### WaveForms

I want to update my waveforms so that users are able to click on the waveforms and the play bar updates accordingly.

### Playlists and Follows

These two features will improve user experience. Follows will allow users to follow another user so that their tracks now appear on the user's stream page. Playlists will allow user's to customize their own queue.  
