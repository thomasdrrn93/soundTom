Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resources :tracks, only: [:create, :show, :update, :index, :destroy]
    resource :session, only: [:show, :create, :destroy]
  end
  root "static_pages#root"

end
