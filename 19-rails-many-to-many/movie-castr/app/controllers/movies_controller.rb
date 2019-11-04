class MoviesController < ApplicationController
  def new_cast
    @movie = Movie.find(params[:id])
    @roles = @movie.roles
    @actors = Actor.all
  end

  def create_cast
    byebug
    @movie = Movie.find(params[:id])
    movie_roles = @movie.roles
    array = params[:role][:actor_id] # role id => actor id
    array.each_key do |role|
      r = movie_roles[role.to_i]
      r.actor_id = array[role]
      r.save
    end
    redirect_to show_movie_path(@movie)
  end

  def show
    @movie = Movie.find(params[:id])
  end
end
