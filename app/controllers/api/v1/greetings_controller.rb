class Api::V1::GreetingsController < ApplicationController
    def index
        @messages = Message.all
    render json: @messages
    end
end
