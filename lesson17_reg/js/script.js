
$(document).ready(function() {
	function showModal() {
		$('.overlay').fadeIn('slow', () =>{
			$('.modal').slideDown('slow');
		});
	};

	function closeModal() {
		$('.modal').slideUp('slow', () => {
				$('.overlay').fadeOut('slow');
		});		
	};

	$('.main_btna').on('click', () => {showModal();});

	$('.main_btn').on('click', () => {showModal();});

	$('nav > ul > li:eq(1)').on('click', () => {showModal();});

	$('.close').click( () => {closeModal();});

});


