Rails.application.routes.draw do
  resources :testcenter_staffs
  resources :testcenters
  resources :coordinates
  resources :contact_data
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
