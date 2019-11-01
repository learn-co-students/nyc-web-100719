class Treater < ApplicationRecord

  has_many :candies, dependent: :destroy

end
