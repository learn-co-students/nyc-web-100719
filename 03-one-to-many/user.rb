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
      tweet.user == self
    end
  end
end