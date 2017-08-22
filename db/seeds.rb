# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user1 = User.create({username: 'guest', password: 'password'})
user2 = User.create({username: 'tom', password: 'password'})
Track.destroy_all
Track.create({name: 'hello', genre: 'rock', uploader_id: user1.id, image: File.open('app/assets/images/new.jpg'),
  audio: File.open('app/assets/songs/Beach.mp3')})
