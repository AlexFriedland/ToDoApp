class ItemsController < ApplicationController
  #nested resource, views need to reflect that
  #form_for(Item.new) - but route name is list_items

  #<% raise list_items_path(@list).inspect %>


  def new
  end

  def create
    @list = List.find(params[:list_id]) #find the parents first
    @item = @list.items.build(item_params) #build directly on that parent
    if @item.save
      redirect_to lists_path(@list)
    else
      render "lists/show"
    end
  end

  #PATCH - /lists/:list_id/items/:id
  def update
    @item = Item.find(params[:id])
    @item.update(item_params)

    #@item.status = params[:item][:status]
    #@item.save

    redirect_to list_path(@item.list)

    #raise params.inspect #the data the form submitted
    #use data to update item described in url
  end

  # def show
  #   render '/lists/show'
  # end

  private

  def item_params
    params.require(:item).permit(:description, :status)
  end
end
