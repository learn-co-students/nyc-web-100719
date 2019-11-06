class FeelingsController < ApplicationController
  def new
    @feeling = Feeling.new
    @crystal_gems = CrystalGem.all
  end

  def show
    @feeling = Feeling.find(params[:id])
    @crystal_gem = @feeling.crystal_gem
  end

  def index
    @feelings = Feeling.all
  end

  def create
    feeling = Feeling.new(feeling_params)

    if feeling.save
      flash.notice = 'Congratulations, your feeling is valid!! 🤡'
      redirect_to feeling_path(feeling)
    else
      flash[:errors] = feeling.errors.full_messages
      redirect_to new_feeling_path
    end
  end

  def destroy
    feeling = Feeling.find(params[:id])
    feeling.destroy
    redirect_to feelings_path
  end

  private

  def feeling_params
    params.require(:feeling).permit(:name, :description, :crystal_gem_id)
  end
end
