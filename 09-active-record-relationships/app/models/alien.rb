class Alien < ActiveRecord::Base
  has_many(:cows)
end