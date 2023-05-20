class GreetingsController < ApplicationController
  def index
    message = Greeting.order('RANDOM()').first
    render json: { greeting: message.message }
  end
end
