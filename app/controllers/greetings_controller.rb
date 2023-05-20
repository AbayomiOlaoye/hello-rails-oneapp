class GreetingsController < ApplicationController
  def random_greeting
    message = Message.order('RANDOM()').first
    render json: { greeting: greeting.message }
  end
end
