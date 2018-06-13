class ItemsController < ApplicationController
  #nested resource, views need to reflect that
  #form_for(Item.new) - but route name is list_items

  #<% raise list_items_path(@list).inspect %>


  def new
  end

  def create
    #find the parents first
    @list = List.find(params[:list_id])
    #build directly on that parent
    @item = @list.items.build(item_params)

    if @item.save
      redirect_to lists_path(@list)
    else
      render "lists/show"
    end
  end

  def update
  end

  private

  def item_params
    params.require(:item).permit(:description)
  end
end
