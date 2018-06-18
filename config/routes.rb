Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show, :create]
    resources :doctors, only: [:show, :index]
    resources :appointments, only: [:update, :show]
    resources :reviews, only: [:update, :create, :destroy]
  end
end
