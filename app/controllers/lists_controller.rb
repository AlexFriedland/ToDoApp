class ListsController < ApplicationController
  def index
    #implicitly rendering 'lists#index.html.erb'
    @lists = List.all
  end
end
