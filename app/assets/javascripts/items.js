function Item(attributes){
  this.description = attributes.description;
  this.id = attributes.id;
}

Item.success = function(json){
  var item = new Item(json);
  var itemLi = item.renderLI()

  $("ul.todo-list").append(itemLi)
}

Item.error = function(response){
  console.log("Yu broke it?", response)
}

Item.formSubmit = function(e){
  e.preventDefault()
  var $form = $(this);
  var action = $form.attr("action");
  var params = $form.serialize();

  $.ajax({
    url: action,
    data: params,
    dataType: "json",
    method: "POST"
  })
  .success(Item.success)
  .error(Item.error)
}

Item.destroy = function(json){
  var item = new Item(json);
  item.destroy()
}

Item.prototype.$li = function(){
  return $("li#item_"+this.id)
}
Item.prototype.destroy = function(){
  this.$li().remove();
}

Item.destroyListener = function(){
  $("ul.todo-list").on("click", "input.destroy", function(e){
    e.preventDefault();
    // submit this form via ajax and then remove the item
    var $form = $(this).parent("form");
    var action = $form.attr("action");
    var params = $form.serialize();

    $.ajax({
      url: action,
      data: params,
      dataType: "json",
      method: "DELETE"
    })
    .success(Item.destroy)
  })
}
Item.formSubmitListener = function(){
  $('form#new_item').on("submit", Item.formSubmit)
}

Item.ready = function(){
  Item.templateSource = $("#item-template").html()
  Item.template = Handlebars.compile(Item.templateSource);
  Item.formSubmitListener()
  Item.destroyListener()
}

Item.prototype.renderLI = function(){
  return Item.template(this)
}

$(function(){
  Item.ready()
})
