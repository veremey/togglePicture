
$(document).ready(function () {

	var plotLineChart = document.querySelector('#line-chart');
	var on = true;
	var off = false;

	$('.picture__curtain').addClass('is-load');

	setTimeout(function () {
		$(' .picture__img').removeClass('is-active');
		$(' .picture_on').addClass('is-active');
		$('.toggler__checkbox').addClass('is-active');
	}, 3000);

	setTimeout(function () {
		$('.picture__fog').addClass('is-active');
	}, 3200);


	/*-----toggler__desc click -------*/
	/*---------------------*/
	$('.toggler__desc').on('click', function () {

		if ($(this).hasClass('toggler_on')) {
			$(this).parents('.toggler').find('.toggler__checkbox').addClass('is-active');
			$('.picture__img').removeClass('is-active');
			$('.picture_on, .picture__fog').addClass('is-active');
		} else {
			$(this).parents('.toggler').find('.toggler__checkbox').removeClass('is-active');
			$('.picture__img, .picture__fog').removeClass('is-active');
			$('.picture_off').addClass('is-active');
		}
	});
	/*-----toggler__btn click -------*/
	/*---------------------*/
	$('.toggler__btn').on('click', function (e) {
		e.preventDefault();
		var $toggler = $(this).parents('.toggler').find('.toggler__checkbox');

		if ($toggler.hasClass('is-active')) {
			$toggler.removeClass('is-active');
			$('.picture__img, .picture__fog').removeClass('is-active');
			$('.picture_off').addClass('is-active');
		} else {
			$toggler.addClass('is-active');
			$('.picture__img').removeClass('is-active');
			$('.picture_on, .picture__fog').addClass('is-active');
		}
	});
});

