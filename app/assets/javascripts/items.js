// define proto Item
function Item(attributes){
  this.description = attributes.description;
  this.id = attributes.id;
}

$(function(){
  Item.templateSource = $("#item-template").html()
  Item.template = Handlebars.compile(Item.templateSource);
})

// Item.template({description: "New List Item"}) //=> returns LI with everything-

Item.prototype.renderLI = function(){
  return Item.template(this)
}

Item.success = function(json){
  var item = new Item(json);
  var itemLi = item.renderLI()
  $("ul.todo-list").append(itemLi)
}

Item.error = function(){
  console.log("ERROR", response)
}

$(function(){
  $("form#new_item").on("submit", function(e){
    e.preventDefault()
    // get data + cache objects
    // entire form
    var $form = $(this);
    var action = $form.attr("action");
    var params = $form.serialize();

    //change this to explicitly json bc otherwise browser won't send back correct
    // $.post(action, params)
    $.ajax({
      url: action,
      data: params,
      dataType: "json",
      method: "POST"
    })
    .success(Item.success)
    .error(Item.error)
  })
})
