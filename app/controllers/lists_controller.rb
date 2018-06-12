require 'pry'

class ListsController < ApplicationController
  def index
    #implicitly rendering 'lists#index.html.erb'
    @list = List.new
    @lists = List.all
  end

  def show
    @list = List.find_by(id: params[:id])
    @item = @list.items.build
  end

  def create
    #read activerecord strong_parameters
    @list = List.create!(name: params[:list][:name])
    redirect_to list_path(@list)
  end

  private
  def list_params
    params.require(:list).permit(:name)
  end
end
