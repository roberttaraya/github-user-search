Rails.application.routes.draw do
  root 'home#index'

  get 'sessions/create'
  get 'sessions/destroy'
  get 'github/authorize'
  get 'github/callback'
  get 'github/search'
  get 'github/users/:username', to: 'github#user'
  get 'github/users/:username/repos', to: 'github#repos'
  get 'github/users/:username/followers', to: 'github#followers'
end
