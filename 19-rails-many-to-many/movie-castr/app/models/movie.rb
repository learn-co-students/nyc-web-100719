class Movie < ApplicationRecord
  has_many :roles, dependent: :destroy
  has_many :actors, through: :roles
end
