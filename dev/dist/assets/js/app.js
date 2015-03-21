(function($){
    $(document).ready(function() {
    	$('.block.link').tinytip({
            position : 'bottom',
            animation : '+10',
            tooltip : "Coming Soon",
            // content : $('.drop-menu'),
            //fix : '-20 -20',
            speed : 100,
            on : 'click',
            preventClose : true,
            onLoad : function(e){
                //e.text('lool');
            },
            //off: 'click'
        });
    });
}(jQuery));
