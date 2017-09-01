# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user1 = User.create!({username: 'guest', password: 'password', profile_pic: File.open('app/assets/images/guestprof.jpg')})
user2 = User.create!({username: 'Animal Collective', password: 'password', profile_pic: File.open('app/assets/images/animalprof.jpg')})
user3 = User.create!({username: 'Kendrick Lamar', password: 'password', profile_pic: File.open('app/assets/images/kendrickprof.jpg')})
user4 = User.create!({username: 'Panda Bear', password: 'password'})
user5 = User.create!({username: 'LCD Soundsystem', password: 'password', profile_pic: File.open('app/assets/images/lcdprof.jpg')})
user6 = User.create!({username: 'Real Estate', password: 'password'})
user7 = User.create!({username: 'Bob Dylan', password: 'password', profile_pic: File.open('app/assets/images/dylanprof.jpg')})
user8 = User.create!({username: 'Chance the Rapper', password: 'password', profile_pic: File.open('app/assets/images/chanceprof.jpg')})
user9 = User.create!({username: 'Tame Impala', password: 'password', profile_pic: File.open('app/assets/images/tameprof.jpg')})
user10 = User.create!({username: 'Radiohead', password: 'password', profile_pic: File.open('app/assets/images/radioheadprof.jpg')})

Track.destroy_all
Track.create!({name: 'My Girls', genre: 'rock', uploader_id: user2.id, image: File.open('app/assets/images/mpp.jpg'),
  audio: "https://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/001/original/My-Girls.mp3"})
Track.create!({name: 'Like a Rolling Stone', genre: 'rock', uploader_id: user7.id, image: File.open('app/assets/images/dylan.jpg'),
  audio: 'https://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/002/original/Like-A-Rolling-Stone.mp3'})
Track.create!({name: 'Juice', genre: 'rap', uploader_id: user8.id, image: File.open('app/assets/images/acid-rap.jpg'),
  audio: 'https://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/003/original/Juice.mp3'})
Track.create!({name: 'Karma Police', genre: 'rock', uploader_id: user10.id, image: File.open('app/assets/images/ok-computer.jpg'),
  audio: 'https://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/004/original/Karma-Police.mp3'})
Track.create!({name: 'Let it Happen', genre: 'rock', uploader_id: user9.id, image: File.open('app/assets/images/currents.jpg'),
  audio: 'https://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/005/original/Let-It-Happen.mp3'})
Track.create!({name: 'Money Trees', genre: 'rap', uploader_id: user3.id, image: File.open('app/assets/images/KendrickGKMC.jpg'),
  audio: 'https://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/006/original/Money-Trees.mp3'})
Track.create!({name: 'Simple Twist of Faith', genre: 'rock', uploader_id: user7.id, image: File.open('app/assets/images/bob.jpg'),
  audio: 'https://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/007/original/Simple-Twist-of-Faith.mp3'})
Track.create!({name: 'The National Anthem', genre: 'rock', uploader_id: user10.id, image: File.open('app/assets/images/kid-a.jpg'),
  audio: 'https://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/008/original/The-National-Anthem.mp3'})
Track.create!({name: 'Dance Yrself Clean', genre: 'rock', uploader_id: user5.id, image: File.open('app/assets/images/lcd.jpg'),
  audio: 'https://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/009/original/Dance-Yrself-Clean.mp3'})
Track.create!({name: 'Burn the Witch', genre: 'rock', uploader_id: user10.id, image: File.open('app/assets/images/moon.jpg'),
  audio: 'https://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/010/original/Burn-the-Witch.mp3'})
Track.create!({name: 'Summer Friends', genre: 'rock', uploader_id: user8.id, image: File.open('app/assets/images/chance-3-artwork.jpg'),
  audio: 'https://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/011/original/Summer-Friends.mp3'})
Track.create!({name: 'All My Friends', genre: 'rock', uploader_id: user5.id, image: File.open('app/assets/images/sos.jpg'),
  audio: 'https://s3.amazonaws.com/soundtom-dev/tracks/audios/000/000/012/original/All-My-Friends.mp3'})
