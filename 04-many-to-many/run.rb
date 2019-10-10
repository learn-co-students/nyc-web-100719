require 'pry'
require_relative 'like'
require_relative 'tweet'
require_relative 'user'

u1 = User.new('coffee dad')
u2 = User.new('tea mom')
u3 = User.new('kambucha kid')

t1 = Tweet.new('I love coffee', u1)
t2 = Tweet.new('Tea is the best', u2)
t3 = Tweet.new('Coffee sucks', u2)

l1 = Like.new(t2, u3)
l2 = Like.new(t2, u2)

binding.pry