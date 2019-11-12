class DogsController < ApplicationController
  before_action :authorized, only: [:secret]
  
  def index
    @dogs = if logged_in?
      current_user.dogs
    else
      Dog.all
    end
  end

  def secret
    @dogs = Dog.all
    render :index
  end
end
