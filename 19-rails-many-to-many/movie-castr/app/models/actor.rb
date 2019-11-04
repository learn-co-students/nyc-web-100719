class Actor < ApplicationRecord
  has_many :roles, dependent: :nullify
  has_many :movies, through: :roles
end
