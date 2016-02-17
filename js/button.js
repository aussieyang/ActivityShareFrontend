// changes color of button on hover

$(document).ready(function(){
  $( ":button" ).hover(function(){
    $(this).css("background","#02baff");
  },function(){
    $(this).css("background","");
  });
});
