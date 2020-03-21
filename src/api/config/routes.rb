Rails.application.routes.draw do
  resources :criterions
  resources :administrators
  resources :opening_hours
  resources :regions
  resources :patients
  resources :testcenter_staffs
  resources :testcenters
  resources :coordinates
  resources :contact_data
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
