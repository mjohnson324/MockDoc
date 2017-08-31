Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show, :create, :update]

    resources :doctors, only: [:show, :index]

    resources :specialties, only: [:index]
    resources :certifications, only: [:index]

    resources :appointments, only: [:index, :update, :show]
    resources :reviews, only: [:update, :create]
  end

end
