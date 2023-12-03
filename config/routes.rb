Rails.application.routes.draw do
  root 'messages#index'

  namespace :api do
    namespace :v1 do
      get 'messages', to: 'messages#random_greeting'
    end
  end
end
