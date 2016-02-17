//changes link colour on hover

$(document).ready(function(){
  $( "a" ).hover(function(){
    $(this).css("color","#39CED9");
  },function(){
    $(this).css("color","");
  });
});
