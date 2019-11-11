Rails.application.routes.draw do
  resources :books

  post '/cart', to: 'cart#add_to_cart', as: 'add_to_cart'
  delete '/cart', to: 'cart#remove_from_cart'
  delete '/clear_cart', to: 'cart#clear_cart'

end
