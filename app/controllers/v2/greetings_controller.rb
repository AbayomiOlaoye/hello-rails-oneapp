class V2::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.order('RANDOM()').first
    render json: { greeting: @greeting.message }
  end
end
