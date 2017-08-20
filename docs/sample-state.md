    {
      entities: {
        users: {
          1: {
            id: 1,
            username: 'Guest',
            user_pic_url: 'pic.jpeg',
            user_pic_background_url: 'background_pic.jpeg',
            tracks: [1,3,7],
            comments: [3, 6, 8],
            location: 'New York'
          },
          2: {
            id: 2,
            username: 'FluffyBear',
            user_pic_url: 'pic2.jpeg'
            user_pic_background_url: background_pic2.jpeg,
            tracks: [2, 5],
            comments: [1, 4, 6],
            location: 'New York'
          }
        },
        tracks: {
          1: {
            id : 1,
            artist_id: 1,
            title: "first_song"
            song_url: "first_song.jpeg",
            song_pic_url: "frst_song_pic.jpeg",
            description: "New Single"
            comments: [2,3]
          },
          2: {
            id : 2,
            artist_id: 2,
            title: "second_song",
            song_url: "second_song.jpeg",
            song_pic_url: "second_song_pic.jpeg",
            comments: [4]
          },
        },
        comments:{
          1: {
            id: 1,
            commenter_id: 1,
            track_id: 1,
            body: "cool song"
          }
        }
      },
      errors: {
        login: ["Incorrect username/password combination"],
        uploadForm: ["Song file did not upload"],
      },
      current_user: {
        id: 1,
        username: 'Guest',
        user_pic_url: 'pic.jpeg',
        user_pic_background_url: 'background_pic.jpeg',
        tracks: [1,3,7]
        comments: [3, 6, 8];
        follows: [2,4,8];
        following: [1, 4, 5]
      },
      current_track {
        id : 1,
        artist_id: 1,
        title: "first_song"
        song_url: "first_song.jpeg",
        song_pic_url: "frst_song_pic.jpeg",
        comments: [2,3]
      }
    }
