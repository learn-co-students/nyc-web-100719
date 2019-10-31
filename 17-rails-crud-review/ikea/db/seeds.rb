puts "Creating Departments"

Department.find_or_create_by(name: "Meatball Department")
Department.find_or_create_by(name: "Meatball Department 2")
Department.find_or_create_by(name: "Bedroom Living")
Department.find_or_create_by(name: "Kitchen")
Department.find_or_create_by(name: "German Department")
Department.find_or_create_by(name: "Kids Department")
Department.find_or_create_by(name: "Lief Ericsson Department")

puts "Created Departments"
