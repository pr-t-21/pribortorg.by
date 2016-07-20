jQuery(document).ready(function() {
    function close_accordion_section() {
        jQuery('.accordion .accordion-section-title').removeClass('active');
        jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
        jQuery('.review-quot').css('color', '#333');
    }
 
   jQuery('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = jQuery(this).attr('href');
 
        if(jQuery(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            jQuery(this).addClass('active');
            // Open up the hidden content panel
            jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
            jQuery('.accordion ' + currentAttrValue).prev('.review-quot').css('color', '#999');
        }
 
        e.preventDefault();
    });
    
    var dates = document.getElementsByClassName('date-display-single');
    jQuery(".view-otzyvy-pokupatelei li.views-row-first").prepend("<h3>" + dates[0].innerHTML.substring(6, 10) + "</h3>");
    for (var i = 1; i < dates.length; i++){
        var date = dates[i];
        console.log(date.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
        var currentYear = parseInt(date.innerHTML.substring(6, 10));
        var previousYear = parseInt(dates[i - 1].innerHTML.substring(6, 10));
        if (currentYear < previousYear){
            jQuery(date.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement).prepend("<h3>" + currentYear + "</h3>");
        }
    }

});

