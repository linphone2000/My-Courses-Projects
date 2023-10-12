$("h1").addClass("big-title");
$("button").text("Don't");
$("button").mouseover(function (e) { 
    $("h1").css("color","blue")    
});
$(document).keypress(function (e) { 
    console.log(e)
    $("h1").text(e.key)
});
