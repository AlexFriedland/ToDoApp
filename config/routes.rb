Rails.application.routes.draw do
  resources :td_items
  resources :lists
  get 'site/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'lists#index'


end
