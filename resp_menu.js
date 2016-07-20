jQuery(document).ready(function($){	
	if ($('#block-nice-menus-1 .content').children().length == 0){
		jQuery('#block-nice-menus-2 .content').prepend('<input type="checkbox" id="showcat">');
		jQuery('#block-nice-menus-2 .content').prepend('<label for="showcat">Catalog<label/>');
	}
	else{
		jQuery('#block-nice-menus-1 .content').prepend('<input type="checkbox" id="showcat">');
		jQuery('#block-nice-menus-1 .content').prepend('<label for="showcat">Каталог<label/>');
	}	
});
