class ListsController < ApplicationController
  def index
    #implicitly rendering 'lists#index.html.erb'
    @lists = List.all
  end

  def show
    @list = List.find_by(params[:id])
  end
end
