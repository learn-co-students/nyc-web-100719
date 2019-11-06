class Feeling < ApplicationRecord
  belongs_to :crystal_gem
  validates :name, uniqueness: {case_sensitive: false}
end
