// define proto Item
function Item(attributes){
  this.description = attributes.name;
  this.id = attributes.id;
}

Item.prototype.renderLI = function(){

}

$(function(){
  $("form#new_item").on("submit", function(e){
    e.preventDefault()
    // get data + cache objects
    // entire form
    var $form = $(this);
    var action = $form.attr("action")
    var params = $form.serialize()

    //change this to explicitly json bc otherwise browser won't send back correct
    $.post(action, params)
    // $.ajax({
    //   url: action,
    //   data: params,
    //   dataType: "json",
    //   method: "POST"
    // })
    .success(function(json){
      //get back json of object created

      var item = new Item(json)
      itemLi = item.renderLI()
      $("ul.todo-list").append(itemLi)

      // shit doesn't work right, json.name = todolist name
      // html = ""
      // html += "<li>" + json.name + "</li>"
      console.log(json)
    }).error(function(response){
      console.log("ERROR", response)
    })
  })
})
