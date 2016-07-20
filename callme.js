(function($) {
    jQuery(document).ready(function () {
        
		jQuery('#block-webform-client-block-489').prepend('<div id="close_btn"></div>');
		
        // Обрабатываем клик по кнопке "Заказать звонок".
        // Если хотите использовать on вместо live, ставьте модуль jQueryUpdate.
        jQuery("#call_me_btn").click(function(){
            // Добавлям только один раз.
            jQuery('#block-webform-client-block-489').css('display','block');
			jQuery('#overlay').css('display','block');            
        });

		
		jQuery("#overlay").click(function(){
            jQuery('#block-webform-client-block-489').css('display','none');
			jQuery('#overlay').css('display','none');            
        });
		
		
		jQuery('#close_btn').click(function(){
			jQuery('#block-webform-client-block-489').css('display','none');
			jQuery('#overlay').css('display','none');     
		});
    });
})(jQuery);