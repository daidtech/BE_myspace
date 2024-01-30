Rails.application.routes.draw do
  resources :categories
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "demo1", to: 'demos#demo1'
  root "home#index"

  # create router for module api v1
  namespace :api do
    namespace :v1 do
      # add routes for module api v1 here
      get :posts, to: 'posts#index'
    end
  end
end
