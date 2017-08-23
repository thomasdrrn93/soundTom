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
  audio: File.open('app/assets/songs/My-Girls.mp3')})
Track.create!({name: 'Like a Rolling Stone', genre: 'rock', uploader_id: user7.id, image: File.open('app/assets/images/dylan.jpg'),
  audio: File.open('app/assets/songs/Like-A-Rolling-Stone.mp3')})
Track.create!({name: 'Juice', genre: 'rap', uploader_id: user8.id, image: File.open('app/assets/images/acid-rap.jpg'),
  audio: File.open('app/assets/songs/Juice.mp3')})
Track.create!({name: 'Karma Police', genre: 'rock', uploader_id: user10.id, image: File.open('app/assets/images/ok-computer.jpg'),
  audio: File.open('app/assets/songs/Karma-Police.mp3')})
Track.create!({name: 'Let it Happen', genre: 'rock', uploader_id: user9.id, image: File.open('app/assets/images/currents.jpg'),
  audio: File.open('app/assets/songs/Let-It-Happen.mp3')})
Track.create!({name: 'Money Trees', genre: 'rap', uploader_id: user3.id, image: File.open('app/assets/images/KendrickGKMC.jpg'),
  audio: File.open('app/assets/songs/Money-Trees.mp3')})
Track.create({name: 'Simple Twist of Faith', genre: 'rock', uploader_id: user7.id, image: File.open('app/assets/images/bob.jpg'),
  audio: File.open('app/assets/songs/Simple-Twist-of-Faith.mp3')})
Track.create({name: 'The National Anthem', genre: 'rock', uploader_id: user10.id, image: File.open('app/assets/images/kid-a.jpg'),
  audio: File.open('app/assets/songs/The-National-Anthem.mp3')})
Track.create({name: 'Dance Yrself Clean', genre: 'rock', uploader_id: user5.id, image: File.open('app/assets/images/lcd.jpg'),
  audio: File.open('app/assets/songs/Dance-Yrself-Clean.mp3')})
Track.create({name: 'Burn the Witch', genre: 'rock', uploader_id: user10.id, image: File.open('app/assets/images/moon.jpg'),
  audio: File.open('app/assets/songs/Burn-the-Witch.mp3')})
Track.create({name: 'Summer Friends', genre: 'rock', uploader_id: user8.id, image: File.open('app/assets/images/chance-3-artwork.jpg'),
  audio: File.open('app/assets/songs/Summer-Friends.mp3')})
Track.create({name: 'All My Friends', genre: 'rock', uploader_id: user5.id, image: File.open('app/assets/images/sos.jpg'),
  audio: File.open('app/assets/songs/All-My-Friends.mp3')})
