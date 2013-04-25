Gist::Application.routes.draw do
  root to: "static_pages#home"

  resources :qist_files

  resource :session, only: [:show, :create, :destroy]

  resources :users do
    resources :qists, only: [:index]
  end

  resources :qists do
    resource :favorite, only: [:show, :create]
  end

  resources :favorites, only: [:index, :destroy]
end