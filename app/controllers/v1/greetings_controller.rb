# frozen_string_literal: true

class V1::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.order('RANDOM()').first
      render json: { greeting: @greeting.message }
  end
end