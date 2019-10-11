class Visit
  attr_reader :house, :kid, :time
  
  @@all = []
  
  def initialize(house, kid)
    @house = house
    @kid = kid
    @time = Time.now

    @@all << self
  end

  def self.all
    @@all
  end
end