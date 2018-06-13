Rails.application.routes.draw do
  get 'github/authorize'

  get 'github/callback'

  root 'home#index'
end
