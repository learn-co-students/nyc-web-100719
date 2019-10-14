class Animal
  attr_reader :name#, :mood
  attr_accessor :mood

  def initialize(name)
    # puts 'second break'
    # binding.pry
    @name = name
    @mood = 'nervous'
  end

  # def walk
  #   puts "Hey, I'm walkin' here"
  # end
end