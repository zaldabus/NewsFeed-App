NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :create, :show] do
    resources :entries, only: [:index]
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  root to: "feeds#index"
end
