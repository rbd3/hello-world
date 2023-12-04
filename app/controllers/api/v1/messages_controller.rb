class Api::V1::MessagesController < ApplicationController
  def random_greeting
    @random_greeting = Message.order('RANDOM()').first
    render json: { greeting: @random_greeting.title }
  end
end
