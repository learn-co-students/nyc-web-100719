Rails.application.routes.draw do
  get '/candies', to: 'candies#index', as: 'candies'
  get '/candies/:id', to: 'candies#show', as: 'candy'
  get '/candies/new', to: 'candies#new'
  post '/candies', to: 'candies#create'

  get '/treaters', to: 'treaters#index', as: 'treaters'
end
