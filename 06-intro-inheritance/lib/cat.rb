class Cat < Animal
  # attr_reader :name#, :mood
  # attr_accessor :mood

  # def initialize(name)
  #   @name = name
  #   @mood = 'nervous'
  # end
  include Mammal

  attr_accessor :number_of_lives

  def initialize(name, number_of_lives = 9)
    # puts "first break"
    # binding.pry
    super(name)
    @number_of_lives = number_of_lives
  end
end