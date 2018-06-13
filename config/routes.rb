Rails.application.routes.draw do
  root 'home#index'

  get 'sessions/create'
  get 'sessions/destroy'
  get 'github/authorize'
  get 'github/callback'
  get 'github/search'
  get 'github/users/:username', to: 'github#show'
end
