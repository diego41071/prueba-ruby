Rails.application.routes.draw do
  get '/products', to: 'products#index'
  post '/cart', to: 'cart#add'
  get '/cart', to: 'cart#index'
end
