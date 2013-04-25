Gist::Application.routes.draw do
  root to: "static_pages#home"

  resource :session, only: [:show, :create, :destroy]

  resources :users do
    resources :qists, only: [:index]
  end

  resources :qists do
    resource :favorite, only: [:create, :destroy]
  end

  resources :favorites, only: :index
end