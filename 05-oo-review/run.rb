require 'pry'

require_relative 'house'
require_relative 'kid'
require_relative 'visit'

h1 = House.new("102 Patterson Cres", "snickers")
h2 = House.new("123 Scary Cl", "twizzlers")

k1 = Kid.new('cynthia', 'dancer', 800)
k2 = Kid.new('capser', 'sheet')
k3 = Kid.new('terry', 'horse (back half)')

v1 = Visit.new(h1, k1)
v2 = Visit.new(h2, k2)
v3 = Visit.new(h1, k2)
v4 = Visit.new(h2, k1)


binding.pry
'kthxbye'