Rails.application.routes.draw do
  resources :dogs
  resources :users, only: [:new, :show, :create]
  
  get 'login', to: 'sessions#new', as: 'login'
  post 'sessions', to: 'sessions#create', as: 'sessions'
  delete 'sessions', to: 'sessions#destroy'

  get 'secret_dogs', to: 'dogs#secret', as: 'secret_dogs'
end
