Rails.application.routes.draw do
  # get '/feelings', to: 'feelings#index', as: 'feelings'
  # post '/feelings', to: 'feelings#create'
  # get '/feelings/new', to: 'feelings#new', as: 'new_feeling'
  # get 'feelings/:id', to: 'feelings#show', as: 'feeling'
  # delete 'feelings/:id', to: 'feelings#destroy'

  resources :feelings, except: [:edit, :update]
end
