class ItemsController < ApplicationController
  #nested resource, views need to reflect that
  #form_for(Item.new) - but route name is list_items

  #<% raise list_items_path(@list).inspect %>


  def new
  end

  def create
  end

  def update
  end

  private

  def item_params
  end
end
