class CandySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image, :likes, :id
  # has_many :customers
  # belongs_to :candy
end
