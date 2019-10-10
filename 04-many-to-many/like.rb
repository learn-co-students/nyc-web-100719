class Like
  attr_reader :tweet, :liker

  @@all = []

  def initialize(tweet, liker)
    @tweet = tweet
    @liker = liker

    @@all << self
  end

  def self.all
    @@all
  end
  
end