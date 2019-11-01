class CandiesController < ApplicationController
  def index
    @candies = Candy.all
  end


  def show 
    @candy = Candy.find(params[:id])
  end






  def create
    @candy = Candy.new(candy_params)
    if @candy.valid?
      @candy.save
      redirect_to candy_path(@candy)
    else 
      #re-render the form with our error message as well as the previous information the user entered 
      flash.now[:message] = @candy.errors.full_messages[0]
      render :new 
    end
  
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
