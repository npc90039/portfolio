
$('a').click(function(){
  $(this).toggleClass('active');
  return false;
});

$(document).ready(function(){
	
	$(window).resize(function(){
		location.reload();
	});
	
	$(".menu a").click(function(){
		$("nav").slideToggle();
	});

	
	//filter	
$(".project").each(function(){
    var filter = 0;
    var categories = $(this).data("cate").split(" ");

    for(var i = 0; i < categories.length; i++) {
      if(categories[i] == str) {
        $(this).css("display", "block");
        filter = 1;
      }
    }
    if(filter == 0) {
      $(this).fadeOut();
    }
    else {
      $(this).hide();
      $(this).fadeIn();
    }
  })
})