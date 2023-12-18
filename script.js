//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js

jQuery(document).ready(function($){
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});

//open popup
function openpopup(id) {
    event.preventDefault();
    	$("#"+id+"").addClass('is-visible');
}