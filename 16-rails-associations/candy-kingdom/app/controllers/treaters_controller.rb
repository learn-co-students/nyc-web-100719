class TreatersController < ApplicationController

  def index
    @treaters = Treater.all
  end

end
