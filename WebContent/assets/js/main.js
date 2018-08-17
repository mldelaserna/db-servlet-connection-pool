function hideShowSidebarSubmenu() {
	$('.sidebar__menu li').hover(function() {
		$(this).find('.sidebar__submenu ul').addClass('open');
	})

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
})

