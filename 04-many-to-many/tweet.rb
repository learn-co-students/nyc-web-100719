class Tweet
  attr_reader :message, :author

  @@all = []
  
  def initialize(message, author)
    @message = message
    @author = author

    @@all << self
  end

  def likers
    # we want to return an array of user objects
    # get all the likes in the world
    # select all likes for THIS tweet -> get the array of those likes
    # get and return the likers out of my likes

    all_likes = Like.all
    my_likes = all_likes.select do |like|
      like.tweet == self
    end

    my_likes.map do |like|
      like.liker
    end
  end

  def liker_names
    # likers.map { |like| like.username }
    likers.map(&:username)
  end
  
  def self.all
    @@all
  end
end