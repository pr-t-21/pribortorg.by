jQuery(document).ready(function(){
	jQuery("#product-price-btn").click(function(){
        
       
        
		if ((jQuery("#price").length)){		
			jQuery("#no-price").css({"top":"-9999px"});	
			jQuery("#some-price").css({"top":"100px"});
			jQuery("#some-price").css({"display":"block"});
			jQuery("#overlay").css({"display":"block"});	
			
		}
		else{
			jQuery("#no-price").css({"display":"block"});	
			jQuery("#overlay").css({"display":"block"});
			
		}		
	});
	
	jQuery("#overlay").click(function(){
		jQuery("#overlay").css({"display":"none"});	
		jQuery("#no-price").css({"display":"none"});
		jQuery("#some-price").css({"display":"none"});
	});
	
	jQuery('#close-price-btn').click(function(){
		jQuery('#no-price').css('display','none');
		jQuery('#some-price').css('display','none');
		jQuery('#overlay').css('display','none');     
	});
	
	//chech if product has price 
	
	if (jQuery("#price").length){
		jQuery("#product-price-btn").val("Цена: " + jQuery("#price").text());
	}	
    
     if (jQuery(".field-name-field-image").length){
            var l = [];
            l = jQuery(".field-name-field-image img").attr("height").split("px");
            var h = parseInt(l[0]) + 60;
            jQuery("#block-block-27").css({"top": (h + "px")});            
        }
		
       //console.log(jQuery(".field-name-field-image img").attr(height));
});