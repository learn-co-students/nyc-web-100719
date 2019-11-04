class MoviesController < ApplicationController
  def new_cast
    @movie = Movie.find(params[:id])
    @roles = @movie.roles
    @actors = Actor.all
  end

  def create_cast
    byebug
    # movie = Movie.find(params[:id])
    # array = params[:roles].
  end
end
