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
    #validates name: for list
    #read activerecord strong_parameters
    @list = List.new(list_params)
    if @list.save
      redirect_to list_url(@list)
    else
      flash.alert = "You must be logged in"
      flash[:warning] = "List not saved bc: #{@list.errors.full_messages[0]}"
      @lists = List.all
      render 'index'

    end
  end

  private
  def list_params
    params.require(:list).permit(:name)
  end
end
