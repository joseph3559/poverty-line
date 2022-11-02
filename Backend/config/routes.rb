Rails.application.routes.draw do
  resources :admins
  resources :job_applications
  resources :jobs
  resources :user_profiles
 
  resources :users, param: :_username
  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'
end
