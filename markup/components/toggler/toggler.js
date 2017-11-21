$(document).ready(function () {
	/*-----toggler__desc click -------*/
	/*---------------------*/
	$('.toggler__desc').on('click', function () {

		if($(this).hasClass('toggler_on')){
			$(this).parents('.toggler').find('.toggler__checkbox').addClass('is-active');
			$('.picture__img').removeClass('is-active');
			$('.picture_on').addClass('is-active');
		} else {
			$(this).parents('.toggler').find('.toggler__checkbox').removeClass('is-active');
			$('.picture__img').removeClass('is-active');
			$('.picture_off').addClass('is-active');
		}
	});
	/*-----toggler__btn click -------*/
	/*---------------------*/
	$('.toggler__btn').on('click', function (e) {
		e.preventDefault();
		var $toggler = $(this).parents('.toggler').find('.toggler__checkbox');

		if($toggler.hasClass('is-active')){
			$toggler.removeClass('is-active');
			$('.picture__img').removeClass('is-active');
			$('.picture_off').addClass('is-active');
		} else {
			$toggler.addClass('is-active');
			$('.picture__img').removeClass('is-active');
			$('.picture_on').addClass('is-active');
		}
	});

});