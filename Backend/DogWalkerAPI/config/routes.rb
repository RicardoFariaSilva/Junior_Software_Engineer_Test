Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # clients
  namespace :api do
    namespace :v1 do
      resources :clients
    end
  end

  # dogs
  namespace :api do
    namespace :v1 do
      resources :dogs
    end
  end

  # walkers
  namespace :api do
    namespace :v1 do
      resources :walkers
    end
  end
end
