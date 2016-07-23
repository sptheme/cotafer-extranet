( function( $ ) {
	// Send custom tour design
    $('#register-detail-wizard').steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        stepsOrientation: "vertical",
        /*onStepChanging: function (event, currentIndex, newIndex) {
            console.log('onStepChanging');
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            resizeJquerySteps();
        },
        onFinishing: function (event, currentIndex) {
            console.log('onFinishing');
        },
        onFinished: function (event, currentIndex) {
            console.log('onFinished');
        }*/
    });

    function resizeJquerySteps() {
        $('.wizard .content').animate({ height: $('.body.current').outerHeight() }, "slow");
        console.log('content auto height');
    }

    $(window).resize(resizeJquerySteps);

} ) ( jQuery );	