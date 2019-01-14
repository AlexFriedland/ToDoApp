$(document).ready(function(){

  // $("form#new_item").on("submit", function(e){
  //   // get data + cache objects
  //   // entire form
  //   var $form = $(this);
  //   var action = $form.attr("action")
  //   var params = $form.serialize()
  //
  //   //change this to explicitly json bc otherwise browser won't send back correct
  //   // $.post(action, params)
  //   $.ajax({
  //     url: action,
  //     data: params,
  //     dataType: "json",
  //     method: "POST"
  //   })
  //   .success(function(json){
  //     //get back json of object created
  //     html = ""
  //     html += "<li>" + json.name + "</li>"
  //     console.log(json)
  //     $("ul.todo-list").append(html)
  //   }).error(function(response){
  //     console.log("ERROR", response)
  //   })
  //
  //
  //   e.preventDefault()
  //   console.log("form submit")
  // })

  $("input.toggle").on("change", function(){
    $(this).parents("form").trigger("submit")
  })
});
