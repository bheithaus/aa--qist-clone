Gist::Application.routes.draw do
  root to: "static_pages#home"

  resources :sessions, only: [:create, :destroy]

  resources :users do
    resources :qists, only: [:index]
  end

  resources :qists
end