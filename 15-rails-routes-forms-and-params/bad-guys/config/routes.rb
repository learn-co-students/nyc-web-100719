Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/villains', to: 'villains#index', as: 'villains'
  get '/villains/new', to: 'villains#new', as: 'new_villain'
  post '/villains', to: 'villains#create'
  
  # get '/patients/:id', to: 'patients#show'
end
