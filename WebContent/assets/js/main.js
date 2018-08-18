function hideShowSidebarSubmenu() {

	// $('*:not(.sidebar__menu li.open)').hover(function() {
	// 	$('.sidebar__menu li.open').removeClass('open');
	// })

	// $('.sidebar__menu li').hover(function() {
	// 	$(this).addClass('open');
	// })

	$('.sidebar__menu li').on({
		mouseenter: function() {
			$(this).addClass('open');
		},
		mouseleave: function() {
			$(this).removeClass('open')
		}
	})
}

function modalControls() {

	$('.modal__bg, .modal__close').click(function() {
		$('.modal').fadeOut();
		console.log('clicked');
	});
}

function dataTables() {

	$('#healthCenter').DataTable({
		"pagingType" 	: "simple_numbers",
		"pageLength" 	: "2"
	});

}

$(function() {

	hideShowSidebarSubmenu();
	dataTables();
	modalControls();
})

