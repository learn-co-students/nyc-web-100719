class House
  attr_reader :address, :candy_type
  attr_accessor :is_home
  
  def initialize(address, candy_type, is_home = false)
    @address = address
    @candy_type = candy_type
    @is_home = is_home
  end

  def visitors
    # return an array of kid objects
    # √get all the visits
    # √find all the visits to THIS house
    # extract the kids from the visits

    visits = Visit.all
    my_visits = visits.select do |visit|
      visit.house == self
    end

    my_visits.map do |visit|
      visit.kid
    end
  end
end

# House.new("102 Patterson Cres", "snickers")
# house = House.new('51 Bradley Cl', 'kit kat', true)