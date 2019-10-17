class Tweet
  attr_accessor :message, :username
  # @@all = []

  def self.all
    # @@all
    sql = <<-SQL
      SELECT *
      FROM tweets;
    SQL

    results = DB[:conn].execute(sql)
    
    results.map do |row|
      Tweet.new(row['username'], row['message'])
    end
  end

  def initialize(username, message)
    @message = message
    @username = username

    # @@all << self
  end

  def save
    sql = <<-SQL
      INSERT INTO tweets (username, message)
      VALUES (?, ?);
    SQL

    DB[:conn].execute(sql, self.username, self.message)
  end
end
