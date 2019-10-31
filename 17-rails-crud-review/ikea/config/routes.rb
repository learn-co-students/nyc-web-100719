Rails.application.routes.draw do
  get '/departments', to: 'departments#index', as: 'departments'
  get '/departments/new', to: 'departments#new', as: 'new_department'
  get '/departments/:id', to: 'departments#show', as: 'department'
  post '/departments', to: 'departments#create'
  get '/departments/:id/edit', to: 'departments#edit', as: 'edit_department'
  patch '/departments/:id', to: 'departments#update'
  delete '/departments/:id', to: 'departments#delete', as: 'delete_department'
end
