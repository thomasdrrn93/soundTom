# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user1 = User.create!({username: 'guest', password: 'password'})
user2 = User.create!({username: 'Animal Collective', password: 'password'})
user3 = User.create!({username: 'Kendrick Lamar', password: 'password'})
user4 = User.create!({username: 'Panda Bear', password: 'password'})
user5 = User.create!({username: 'LCD Soundsystem', password: 'password'})
user6 = User.create!({username: 'Real Estate', password: 'password'})
user7 = User.create!({username: 'Bob Dylan', password: 'password'})
user8 = User.create!({username: 'Chance the Rapper', password: 'password'})
user9 = User.create!({username: 'Tame Impala', password: 'password'})
user10 = User.create!({username: 'Radiohead', password: 'password'})

Track.destroy_all
Track.create!({name: 'My Girls', genre: 'rock', uploader_id: user2.id, image: File.open('app/assets/images/mpp.jpg'),
  audio: 'http://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/032/original/My-Girls.mp3?1503499031'})
Track.create!({name: 'Like a Rolling Stone', genre: 'rock', uploader_id: user7.id, image: File.open('app/assets/images/dylan.jpg'),
  audio: 'http://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/033/original/Like-A-Rolling-Stone.mp3?1503499050
'})
Track.create!({name: 'Juice', genre: 'rap', uploader_id: user8.id, image: File.open('app/assets/images/acid-rap.jpg'),
  audio: 'http://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/034/original/Juice.mp3?1503499066'
 })
Track.create!({name: 'Karma Police', genre: 'rock', uploader_id: user10.id, image: File.open('app/assets/images/ok-computer.jpg'),
  audio: 'http://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/035/original/Karma-Police.mp3?1503499072
'})
Track.create!({name: 'Let it Happen', genre: 'rock', uploader_id: user9.id, image: File.open('app/assets/images/currents.jpg'),
  audio: 'http://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/036/original/Let-It-Happen.mp3?1503499081
'})
Track.create!({name: 'Money Trees', genre: 'rap', uploader_id: user3.id, image: File.open('app/assets/images/KendrickGKMC.jpg'),
  audio: 'http://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/037/original/Money-Trees.mp3?1503499113
'})
Track.create!({name: 'Simple Twist of Faith', genre: 'rock', uploader_id: user7.id, image: File.open('app/assets/images/bob.jpg'),
  audio: 'http://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/038/original/Simple-Twist-of-Faith.mp3?1503499131
'})
Track.create!({name: 'The National Anthem', genre: 'rock', uploader_id: user10.id, image: File.open('app/assets/images/kid-a.jpg'),
  audio: 'http://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/039/original/The-National-Anthem.mp3?1503499141
'})
Track.create!({name: 'Dance Yrself Clean', genre: 'rock', uploader_id: user5.id, image: File.open('app/assets/images/lcd.jpg'),
  audio: 'http://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/040/original/Dance-Yrself-Clean.mp3?1503499163
'})
Track.create!({name: 'Burn the Witch', genre: 'rock', uploader_id: user10.id, image: File.open('app/assets/images/moon.jpg'),
  audio: 'http://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/041/original/Burn-the-Witch.mp3?1503499170
'})
Track.create!({name: 'Summer Friends', genre: 'rock', uploader_id: user8.id, image: File.open('app/assets/images/chance-3-artwork.jpg'),
  audio: 'http://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/042/original/Summer-Friends.mp3?1503499188
'})
Track.create!({name: 'All My Friends', genre: 'rock', uploader_id: user5.id, image: File.open('app/assets/images/sos.jpg'),
  audio: 'http://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/043/original/All-My-Friends.mp3?1503499213
'})
