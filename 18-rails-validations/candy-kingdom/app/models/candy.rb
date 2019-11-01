class Candy < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true
  validate :validate_sugar_level
  belongs_to :treater

   def validate_sugar_level
    if  self.sugar_level < 500
      self.errors.add(:sugar_level, "You're probably good & plenty")
    end 
  end

end
