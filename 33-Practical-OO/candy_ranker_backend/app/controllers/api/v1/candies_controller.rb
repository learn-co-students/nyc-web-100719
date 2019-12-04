class Api::V1::CandiesController < ApplicationController
    def index 
        candies = Candy.all
        render json: CandySerializer.new(candies)
    end

    def create 
        candy = Candy.create(candy_params)
        render json: CandySerializer.new(candy)
    end

    def update 
        candy = Candy.find(params[:id])
        likes = candy.likes +=1
        candy.update(likes: likes)
        render json: CandySerializer.new(candy)
    end

    def destroy 
        Candy.find(params[:id]).destroy
    end

    private
    def candy_params
        params.require(:candy).permit(:name, :likes, :image)
    end
end
