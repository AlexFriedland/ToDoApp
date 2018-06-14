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

  #PATCH - /lists/:list_id/items/:id
  def update
    raise params.inspect
    @item = Item.find(params[:id])
    @item.update(item_params)

    #@item.status = params[:item][:status]
    #@item.save

    redirect_to list_path(@item.list)

    #raise params.inspect #the data the form submitted
    #use data to update item described in url
  end

  def show
    render '/lists/show'
  end

  private

  def item_params
    params.require(:item).permit(:description, :status)
  end
end
