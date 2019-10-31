Rails.application.routes.draw do
  get '/candies', to: 'candies#index', as: 'candies'
  get '/candies/new', to: 'candies#new'
  post '/candies', to: 'candies#create'

  get '/treaters', to: 'treaters#index', as: 'treaters'
end
