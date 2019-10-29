puts 'Destroying all ya costumez'
Costume.destroy_all

puts 'Making ya a bunch of costumez'
Costume.create(name: "Batman", size: "L", price: 50.67)
Costume.create(name: "Catwoman", size: "M", price: 60.67)
Costume.create(name: "Hulk", size: "XS", price: 40.52)
Costume.create(name: "Gandalf", size: "XXL", price: 85.00)