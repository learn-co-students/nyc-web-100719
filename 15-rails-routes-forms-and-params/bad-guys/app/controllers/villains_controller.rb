class VillainsController < ApplicationController
  def index
    @villains = Villain.all
  end

  def new
    @villain = Villain.new
  end

  def create
    @villain = Villain.create(villain_params)
    redirect_to villains_path
  end

  private

  def villain_params

    params.require(:villain).permit(:name, :catch_phrase, :power)
  end
end