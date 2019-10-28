require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    @thing = ['iPad', 'Jordans', 'love', 'airPod pros']
    erb :welcome
  end

  get '/gifts' do
    @gifts = Gift.all
    erb :'gifts/index'
  end

end
