# THE WEIRDO BREEDER

# The Weirdo Breeder wants to breed a bunch of dogs that can do the following stuff. 
# Below is a list of their requirements.
# How can we help them out?

# √1. I want to be able to create a cuddle-pile of dogs, each with a name and a breed
# √2. I want every dog to be able to speak and tell me its name
# 3. I want every dog to be able to run around
# 4. I want every dog to be able to perform a trick where they speak, run around, and then rollover
# √5. I want to be able to see a list of all of the dogs in my cuddle-pile -> Dog.cuddle_pile
# √5a. I want a list of dog names
# √6. I want to be able to find puppies in my cuddle-pile by breed -> [ Dog, Dog, Dog ]
# 7. I want to be able to give my cuddle-pile a single command and get them all to speak at the same time

require 'pry'

class Dog
  attr_reader :breed, :name

  @@all = []
  
  def initialize(name, breed)
    @name = name
    @breed = breed

    @@all << self
  end
  
  def speak
    puts "Woof! My name is #{self.name}, obviously. 🐕"
  end
  
  def self.search_by_breed(breed)
    self.cuddle_pile.select do |dog|
      dog.breed == breed
    end
  end
  
  def self.cuddle_pile
    @@all
  end

  def self.dog_names
    self.cuddle_pile.map do |dog|
      dog.name
    end
  end
end

d1 = Dog.new("Lambeau", "black lab")
d2 = Dog.new("Winston", "boston terrier")
d3 = Dog.new("Perky", "german shepherd")
d4 = Dog.new("Neikko", "mostly rat")
d5 = Dog.new("Spot", "black lab")

binding.pry
'kthxbye'