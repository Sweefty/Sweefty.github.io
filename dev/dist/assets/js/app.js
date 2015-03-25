(function($){
    $(document).ready(function() {
        $('.block.link.soon').tinytip({
            
            position : 'bottom',
            animation : {
                top: +10
            },
            tooltip : "Coming Soon",
            // content : $('.drop-menu'),
            fix : {
                top: -100,
                left: -100
            },
            speed : 100,
            on : 'click',
            preventClose : true,
            onLoad : function(e){
                //e.text('lool');
            },
            //off: 'click'
        });

        // $('.mainlogo, .flogo').click(function(){
        //     window.location.href = "http://sweefty.com";
        // });
    });
}(jQuery));
