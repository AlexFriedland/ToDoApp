$(document).ready(function(){

  $("form#new_item").on("submit", function(e){
    console.log("stop")
    e.preventDefault()
  })

  $("input.toggle").on("change", function(){
    $(this).parents("form").trigger("submit")
  })
});
