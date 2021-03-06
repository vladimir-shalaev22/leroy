$(document).ready(function() {

	$('center').replaceWith(function(){
	    return $("<main />", {html: $(this).html()});
	});

	// main page carousel
	$('.js-main-carousel').owlCarousel({
		items:4,
		loop:true,
		margin:10,
		nav:true,
		dots: false,
		navText: [,],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});


	// discussion list generation function
	discussListGen();
});

$(window).load(function() {
	$('.preloader').fadeOut('slow');
});

// discussion list generation
function discussListGen() {
	// js-forum-list
	var forumDiscComp = $('.lia-component-reply-list .linear-message-list'),
		forumDiscGen = $('.js-forum-disc ul'),
		forumDiscCompLength = $('.lia-component-reply-list .linear-message-list .lia-linear-display-message-view').length,
		forumDiscCompRow = $('.lia-component-reply-list .linear-message-list .lia-linear-display-message-view');

	for(i=0;i<forumDiscCompLength;i++) {
		var forumDiscDeleteLink = forumDiscCompRow.eq(i).find('.lia-menu-action .lia-menu-dropdown-items .delete-message').attr('href'),
			forumDiscDeleteData = forumDiscCompRow.eq(i).find('.lia-menu-action .lia-menu-dropdown-items .delete-message').data('lia-action-token'),
			forumDiscDeleteId = forumDiscCompRow.eq(i).find('.lia-menu-action .lia-menu-dropdown-items .delete-message').attr('id'),
			forumDiscDeleteClasses = forumDiscCompRow.eq(i).find('.lia-menu-action .lia-menu-dropdown-items .delete-message').attr('class'),
			deleteButton = forumDiscCompRow.eq(i).find('.forum-disc disc-red li:last-child a');

		deleteButton.addClass(forumDiscDeleteClasses);
		// deleteButton.attr('id', forumDiscDeleteId).attr('data-lia-action-token', forumDiscDeleteData).attr('href', forumDiscDeleteLink);
	}
}