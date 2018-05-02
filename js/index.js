$(window).scroll(function() {
 var x=$(window).scrollTop();
  if(x>323){
    $(".sobre").fadeIn(800);
  }else{
    $(".sobre").fadeOut(800);
  }
  if(x>400){
    $(".caracteristics").fadeIn(800);
  }else{
    $(".caracteristics").fadeOut(800);
  }
  if(x>900){
    $(".depoiment").fadeIn(800);
  }else{
    $(".depoiment").fadeOut(800);
  }
});
$(".front-paper").hover(function(){
  $(".legenda").fadeIn(300);
});
$("#bt1").mouseover(function(){
  $("#bt1").css("background-color","#ffcc66");
  $("#bt1").css("color","black");
  $("#bt1").css("border-color","#ffcc66");
  $("#bt1").mouseout(function(){
    $("#bt1").css("background-color","black");
    $("#bt1").css("color","#ffcc66");
  });
});

$("#bt2").mouseover(function(){
  $("#bt2").css("background-color","#ffcc66");
  $("#bt2").css("color","black");
  $("#bt2").css("border-color","#ffcc66");
  $("#bt2").mouseout(function(){
    $("#bt2").css("background-color","black");
    $("#bt2").css("color","#ffcc66");
  });
});

$("#bt3").mouseover(function(){
  $("#bt3").css("background-color","#ffcc66");
  $("#bt3").css("color","black");
  $("#bt3").css("border-color","#ffcc66");
  $("#bt3").mouseout(function(){
    $("#bt3").css("background-color","black");
    $("#bt3").css("color","#ffcc66");
  });
});

$("#bt4").mouseover(function(){
  $("#bt4").css("background-color","#ffcc66");
  $("#bt4").css("color","black");
  $("#bt4").css("border-color","#ffcc66");
  $("#bt4").mouseout(function(){
    $("#bt4").css("background-color","black");
    $("#bt4").css("color","#ffcc66");
  });
});

$("#bt1").click(function(){
  $("html, body").animate(
    { scrollTop: "0px" },1200
);
});

$("#bt2").click(function(){
  $("html, body").animate(
    { scrollTop: "440px" },1200
);
});


$("#bt3").click(function(){
  $("html, body").animate(
    { scrollTop: "920px" },1200
);
});

$("#bt4").click(function(){
  $("html, body").animate(
    { scrollTop: "1220px" },1200
);
});