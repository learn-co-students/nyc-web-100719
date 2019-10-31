class CandiesController < ApplicationController
  def index
    @candies = Candy.all
  end

  def create
    @candy = Candy.create(candy_params)
    redirect_to candies_path
  end

  def new
    @candy = Candy.new
    @treaters = Treater.all
  end

  private

  def candy_params
    params.require(:candy).permit(:name, :sugar_level, :treater_id)
  end

end
