class CostumesController < ApplicationController

  # index
  get '/costumes' do
    @costumes = Costume.all

    erb :'costumes/index'
  end

  # new  
  get '/costumes/new' do
    @costume = Costume.new
    
    erb :'costumes/new'
  end

  # create
  post '/costumes' do 
    # costume = Costume.create(name: params[:name], size: params[:size], price: params[:price])
    # params => {costume: {name: "name", size: "size", price: 1.00}}
    costume = Costume.create(params[:costume])
    redirect "/costumes/#{costume.id}"
  end
  
  # show
  get '/costumes/:id' do
    @costume = Costume.find(params[:id])
    
    erb :'costumes/show'
  end

  # edit
  get '/costumes/:id/edit' do
    @costume = Costume.find(params[:id])

    erb :'/costumes/edit'
  end

  # update
  patch '/costumes/:id' do
    costume = Costume.find(params[:id])
    costume.update(params[:costume])

    redirect "/costumes/#{costume.id}"
  end
  
  # destroy
  delete '/costumes/:id' do
    costume = Costume.find(params[:id])
    costume.destroy
    redirect '/costumes'
  end
end