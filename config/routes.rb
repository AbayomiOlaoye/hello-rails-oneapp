Rails.application.routes.draw do
  get 'random_greeting', to: 'greetings#index', defaults: { format: :json }
  get '*page', to: 'greetings#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  #root
  root 'static#index'
end
