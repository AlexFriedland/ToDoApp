// define proto Item
function Item(attributes){
  this.description = attributes.name;
  this.id = attributes.id;
}

// use handlebars 
Item.prototype.renderLI = function(){

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
    .success(function(json){
      //get back json of object created

      var item = new Item(json)
      itemLi = item.renderLI()
      $("ul.todo-list").append(itemLi)

      // w this we'd have to make a huge html string to inject into the DOM
      // html = ""
      // html += "<li>" + json.description + "</li>"
      // $("ul.todo-list").append(html)

    }).error(function(response){
      console.log("ERROR", response)
    })
  })
})
