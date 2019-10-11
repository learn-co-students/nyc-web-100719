# OO Review


## Classes
* House
  * √will initialize with address - string, candy_type - string, is_home - boolean
  * √address and candy_type will be static, is_home can change
  * is_home will default to false
  * √`House#visitors`
  * `House#repeat_visitors`
  * `House.candy_types` - unique list of all the candy types offered by the houses


  
* Kid
  * will initialize with name - string, costume - string, mischief_level - integer
  * name and costume are static, mischief can change
  * mischief level is a function of amount of candy - figure this out in a minute 
  * `Kid#houses`
  * `Kid#candy_types` - uniq list of candy types
  * √`Kid#add_visit` - accepts a house object
  * √`Kid#houses_by_candy_type` - returns an array of houses that the kid visited that gave out a particular type of candy



* Visit
  * will initialize with house - house object, kid - kid object, time - datetime
  * all attributes are static