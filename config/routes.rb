Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resources :tracks, only: [:create, :show, :update, :index, :destroy] do
      resources :comments, only: [:create, :index]
    end
    get '/tracks/search/:query', to: 'tracks#search', as: 'query'
    resources :comments, only: [:update, :destroy]
    resource :session, only: [:show, :create, :destroy]
    resources :peaks, only: [:create]
  end
  root "static_pages#root"

end
