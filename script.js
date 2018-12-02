$('.hamburger').click(function(){
	$(this).toggleClass('change');
	if ($('.mobile-menu').is(':visible')){
		$('.mobile-menu').hide();
	}else{
		$('.mobile-menu').show();
	}
});

$(window).resize(function(){
	if ($('.classic-menu').is(':visible')){
		console.log("ok");
		$('.mobile-menu').hide();
		$('.hamburger').removeClass('change');
	}
});
