require 'pry'

class ListsController < ApplicationController

  def index
    #implicitly rendering 'lists#index.html.erb'
    @list = List.new
    @lists = List.all
  end

  def show
    @list = List.find_by(id: params[:id])
    #used to be this below but changed to Item.new BC it was in memory when the
    #page loaded and wasn't allowing proper routes bc it was a blank @item
    #@item = @list.items.build

    @item = Item.new
  end

  def create
    #validates name: for list
    #read activerecord strong_parameters
    @list = List.new(list_params)
    if @list.save
      redirect_to list_url(@list)
    else

      @lists = List.all
      render 'index'

    end
  end

  private
  def list_params
    params.require(:list).permit(:name)
  end
end
