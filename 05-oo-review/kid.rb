require 'pry'

class Kid
  attr_reader :name, :costume
  attr_accessor :mischief_level
  
  def initialize(name, costume, mischief_level = 666)
    @name = name
    @costume = costume
    @mischief_level = mischief_level
  end

  def add_visit(house)
    Visit.new(house, self)
  end

  def change_mischief_by(amount)
    @mischief_level += amount 
  end
  
  def houses_by_candy_type(candy_type)
    # √get all the houses that I visited
    # select and return the houses that gave out the specified candy type

    houses.select do |house|
      house.candy_type == candy_type
    end
  end

  def houses
    # should return an array of house objects

    visits = Visit.all
    my_visits = visits.select do |visit|
      visit.kid == self
    end

    my_visits.map(&:house)
  end
end