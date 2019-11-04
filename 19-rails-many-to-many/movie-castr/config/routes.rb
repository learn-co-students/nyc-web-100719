Rails.application.routes.draw do
  get '/movies/:id/cast', to: "movies#new_cast", as: 'cast_movie'
  post '/movies/:id/cast', to: "movies#create_cast"

  get '/movies/:id', to: "movies#show", as: 'show_movie'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
