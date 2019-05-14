$(document).ready(function () {
	$(document).on('click', "#menu a", function(e){
		e.preventDefault();
		var url = $(this).attr('href');
		$('main').load(url);
	});
});