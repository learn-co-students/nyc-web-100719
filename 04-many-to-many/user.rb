class User
  attr_reader :username#, :tweets

  def initialize(username)
    @username = username
    # @tweets = []
  end

  def post_tweet(message)
    tweet = Tweet.new(message, self)
    # @tweets << tweet
  end

  def tweets
    # √get all tweets
    # √select all tweets for this user
    # return the array of those tweets

    tweets = Tweet.all
    tweets.select do |tweet|
      tweet.author == self
    end
  end

  def like_tweet(tweet)
    Like.new(tweet, self)
  end
  
  def liked_tweets
    # return an array of MY tweets that have at least one like
    # get all of MY tweets
    # get all the likes in the world
    # get all the liked tweets in the world

     all_the_likes = Like.all
     all_the_liked_tweets = all_the_likes.map(&:tweet)

    tweets & all_the_liked_tweets
  end
end