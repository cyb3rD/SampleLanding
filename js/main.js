$(document).ready(function() {
	// document finished loading
	$('section#screenshots a').on('click', function(event) {
		/* Replace src of modal by the url in screenshots */
		$('div#modal img').attr('src', $(this).attr('data-image-url'));
	});

});
